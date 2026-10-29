# Cloudflare Edge Email & Follow-up Drip Engine

This service runs the **entire lead capture, email marketing, and automated 5-day follow-up sequences natively on Cloudflare**.

---

## Architecture Overview
- **Compute**: Cloudflare Workers (TypeScript + Hono)
- **Database**: Cloudflare D1 (Serverless SQLite on the edge)
- **Automated Drip Scheduling**: Cloudflare Cron Triggers (`0 * * * *` hourly evaluation)
- **Email Delivery**: Cloudflare native fetch to Resend / SendGrid API (or mock mode during local dev)

---

## API Endpoints
1. `POST /api/subscribe`: Captures user email + name, inserts subscriber into D1, and dispatches Day 1 guide immediately.
2. `GET /api/unsubscribe`: One-click compliant unsubscribe updating subscriber status in D1.
3. `POST /api/webhook/stripe`: Handles checkout purchases, upgrades user to `pro` or `agency`, and halts sales drip.
4. `GET /api/admin/subscribers`: Protected reporting endpoint (requires `Authorization: Bearer <ADMIN_SECRET>`).

---

## Cron Drip Engine Logic
Every hour, Cloudflare executes `scheduled(event, env, ctx)`:
1. Queries D1 for active free subscribers whose `next_send_at <= current_time` and `current_step < 5`.
2. Compiles the next email template (Email 2, 3, 4, or 5).
3. Sends the email and logs delivery to `email_logs`.
4. Updates `current_step` and advances `next_send_at` by 24 hours.

---

## Deployment in 60 Seconds
```bash
cd cloudflare-backend
./scripts/deploy.sh
```
