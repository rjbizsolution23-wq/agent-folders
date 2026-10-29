import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { EMAIL_SEQUENCE } from './emails';

export interface Env {
  DB: D1Database;
  RESEND_API_KEY?: string;
  SENDGRID_API_KEY?: string;
  ADMIN_SECRET?: string;
  APP_URL?: string;
}

const app = new Hono<{ Bindings: Env }>();

app.use('/*', cors());

// Helper: send email via Resend or mock
async function sendEmail(apiKey: string | undefined, to: string, subject: string, html: string): Promise<boolean> {
  if (!apiKey) {
    console.log(`[DRIP LOG - MOCK SEND] To: ${to} | Subject: ${subject}`);
    return true;
  }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Rick Jefferson <support@rjbusinesssolutions.org>',
        to: [to],
        subject: subject,
        html: html
      })
    });
    return res.ok;
  } catch (err) {
    console.error('Failed to send email:', err);
    return false;
  }
}

// -----------------------------------------------------------------------------
// POST /api/subscribe — Captures lead, sends Day 1 email immediately
// -----------------------------------------------------------------------------
app.post('/api/subscribe', async (c) => {
  const body = await c.req.json().catch(() => ({}));
  const email = body.email?.trim().toLowerCase();
  const name = body.name?.trim() || 'Developer';
  const source = body.source || 'landing_page';

  if (!email || !email.includes('@')) {
    return c.json({ error: 'Valid email required' }, 400);
  }

  const now = Math.floor(Date.now() / 1000);
  const nextSend = now + 86400; // Step 2 in 24 hours
  const id = crypto.randomUUID();

  try {
    // Upsert subscriber
    await c.env.DB.prepare(`
      INSERT INTO subscribers (id, email, name, tier, status, current_step, next_send_at, created_at, source)
      VALUES (?, ?, ?, 'free', 'active', 1, ?, ?, ?)
      ON CONFLICT(email) DO UPDATE SET
        status = 'active',
        next_send_at = ?
    `).bind(id, email, name, nextSend, now, source, nextSend).run();

    // Trigger Day 1 email immediately
    const emailData = EMAIL_SEQUENCE[1];
    const appUrl = c.env.APP_URL || 'https://rjbusinesssolutions.org';
    const unsubUrl = `${appUrl}/api/unsubscribe?email=${encodeURIComponent(email)}`;
    const html = emailData.html(name, unsubUrl);

    const sent = await sendEmail(c.env.RESEND_API_KEY, email, emailData.subject, html);

    // Log email
    await c.env.DB.prepare(`
      INSERT INTO email_logs (id, subscriber_id, email, step, subject, status, sent_at)
      VALUES (?, ?, ?, 1, ?, ?, ?)
    `).bind(crypto.randomUUID(), id, email, emailData.subject, sent ? 'sent' : 'failed', now).run();

    return c.json({ success: true, message: 'Subscribed and Day 1 guide dispatched.' });
  } catch (e: any) {
    console.error('DB Error:', e);
    return c.json({ error: e.message }, 500);
  }
});

// -----------------------------------------------------------------------------
// GET /api/unsubscribe
// -----------------------------------------------------------------------------
app.get('/api/unsubscribe', async (c) => {
  const email = c.req.query('email');
  if (email) {
    await c.env.DB.prepare(`
      UPDATE subscribers SET status = 'unsubscribed' WHERE email = ?
    `).bind(email.toLowerCase()).run();
  }
  return c.html(`
    <div style="font-family: sans-serif; text-align: center; padding: 50px;">
      <h2>You have been unsubscribed</h2>
      <p>You will no longer receive follow-up emails from RJ Business Solutions.</p>
    </div>
  `);
});

// -----------------------------------------------------------------------------
// POST /api/webhook/stripe — Payment receipt stops drip & upgrades tier
// -----------------------------------------------------------------------------
app.post('/api/webhook/stripe', async (c) => {
  const body = await c.req.json().catch(() => ({}));
  const email = body.email?.toLowerCase();
  const tier = body.tier || 'pro';
  const amount = body.amount || 9700;

  if (email) {
    const now = Math.floor(Date.now() / 1000);
    await c.env.DB.prepare(`
      UPDATE subscribers SET tier = ?, status = 'converted' WHERE email = ?
    `).bind(tier, email).run();

    await c.env.DB.prepare(`
      INSERT INTO orders (id, email, tier, amount, payment_method, created_at)
      VALUES (?, ?, ?, ?, 'stripe', ?)
    `).bind(crypto.randomUUID(), email, tier, amount, now).run();
  }

  return c.json({ received: true });
});

// -----------------------------------------------------------------------------
// GET /api/admin/subscribers — Protected admin reporting
// -----------------------------------------------------------------------------
app.get('/api/admin/subscribers', async (c) => {
  const auth = c.req.header('Authorization');
  if (!c.env.ADMIN_SECRET || auth !== `Bearer ${c.env.ADMIN_SECRET}`) {
    return c.json({ error: 'Unauthorized' }, 401);
  }
  const { results: subs } = await c.env.DB.prepare('SELECT * FROM subscribers ORDER BY created_at DESC LIMIT 100').all();
  const { results: orders } = await c.env.DB.prepare('SELECT * FROM orders ORDER BY created_at DESC LIMIT 50').all();
  return c.json({ subscribers: subs, orders: orders });
});

// =============================================================================
// CRON DRIP ENGINE: Evaluates & sends due follow-up emails (Steps 2 through 5)
// =============================================================================
async function processDripFollowups(env: Env) {
  const now = Math.floor(Date.now() / 1000);

  // Fetch active free subscribers whose next_send_at <= now and current_step < 5
  const { results } = await env.DB.prepare(`
    SELECT id, email, name, current_step FROM subscribers
    WHERE status = 'active' AND tier = 'free' AND current_step < 5 AND next_send_at <= ?
    LIMIT 50
  `).bind(now).all();

  console.log(`[CRON DRIP] Found ${results.length} subscribers due for follow-ups.`);

  const appUrl = env.APP_URL || 'https://rjbusinesssolutions.org';

  for (const sub of results as any[]) {
    const nextStep = sub.current_step + 1;
    const emailData = EMAIL_SEQUENCE[nextStep];

    if (emailData) {
      const unsubUrl = `${appUrl}/api/unsubscribe?email=${encodeURIComponent(sub.email)}`;
      const html = emailData.html(sub.name || 'Developer', unsubUrl);

      const sent = await sendEmail(env.RESEND_API_KEY, sub.email, emailData.subject, html);

      const nextSendTime = now + 86400; // schedule next email in 24 hours
      await env.DB.prepare(`
        UPDATE subscribers
        SET current_step = ?, next_send_at = ?, last_sent_at = ?
        WHERE id = ?
      `).bind(nextStep, nextSendTime, now, sub.id).run();

      await env.DB.prepare(`
        INSERT INTO email_logs (id, subscriber_id, email, step, subject, status, sent_at)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(crypto.randomUUID(), sub.id, sub.email, nextStep, emailData.subject, sent ? 'sent' : 'failed', now).run();

      console.log(`[CRON DRIP] Sent Step ${nextStep} to ${sub.email}`);
    }
  }
}

export default {
  fetch: app.fetch,
  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(processDripFollowups(env));
  }
};
