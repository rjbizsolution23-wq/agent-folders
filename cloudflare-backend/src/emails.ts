// Canonical HTML Email Templates for 5-Day Automated Follow-up Sequence
// Formatted with executive RJ Business Solutions styling

export interface EmailData {
  subject: string;
  html: (name: string, unsubscribeUrl: string) => string;
}

const emailHeader = (title: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 20px; line-height: 1.6; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #2563eb 100%); color: #ffffff; padding: 32px; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #93c5fd; text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em; }
    .content { padding: 32px; }
    .btn { display: inline-block; background: #2563eb; color: #ffffff !important; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 20px 0; }
    .box { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin: 20px 0; font-size: 14px; }
    .code { font-family: monospace; background: #0f172a; color: #38bdf8; padding: 2px 6px; border-radius: 4px; font-size: 13px; }
    .footer { padding: 24px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>RJ Business Solutions</h1>
      <p>Autonomous AI Systems & Context Engineering</p>
    </div>
    <div class="content">
`;

const emailFooter = (unsubscribeUrl: string) => `
    </div>
    <div class="footer">
      <p>RJ Business Solutions • 1342 NM 333, Tijeras, New Mexico 87059</p>
      <p>Questions? Contact Rick Jefferson at <a href="mailto:support@rjbusinesssolutions.org" style="color: #2563eb;">support@rjbusinesssolutions.org</a></p>
      <p><a href="${unsubscribeUrl}" style="color: #94a3b8; text-decoration: underline;">Unsubscribe</a></p>
    </div>
  </div>
</body>
</html>
`;

export const EMAIL_SEQUENCE: Record<number, EmailData> = {
  1: {
    subject: "Why your AI coding agent loses context (and how to fix it)",
    html: (name, unsub) => `
      ${emailHeader("Progressive Context Protocol")}
      <p>Hey ${name},</p>
      <p>If you've spent any time coding with <strong>Cursor, Claude Code, or Codex</strong>, you've probably felt this exact frustration:</p>
      <p>You start a new project. For the first 3 files, the AI feels like a genius. Then your repo hits 15 files... and suddenly the agent forgets your rules, invents phantom libraries, and burns 45,000 tokens on a 2-line bug fix.</p>
      <div class="box">
        <strong>The Root Cause: Context Saturation ("Lost in the Middle")</strong><br>
        When you dump an entire repository into an LLM's prompt, its reasoning accuracy drops by up to 35%. The model literally loses focus.
      </div>
      <p>That's why we created <strong>agent-folders</strong>.</p>
      <p>Instead of feeding the agent your entire codebase, it enforces a <strong>6-Level Progressive Context Protocol</strong>. Your agent loads a sub-300-token root pointer (<span class="code">AGENTS.md</span>) and only pulls specific policies or skills on-demand when the task actually requires it.</p>
      <center><a href="https://github.com/rjbizsolution23-wq/agent-folders" class="btn">Explore the GitHub Repository</a></center>
      <p>Tomorrow, I'm going to show you a live benchmark of Cursor fixing a defect in 8 seconds using just 800 tokens.</p>
      <p>Stay sharp,<br><strong>Rick Jefferson</strong><br>CEO & Lead Architect, RJ Business Solutions</p>
      ${emailFooter(unsub)}
    `
  },
  2: {
    subject: "Live Benchmark: 45k tokens vs. 800 tokens (Cursor test)",
    html: (name, unsub) => `
      ${emailHeader("Empirical Benchmark Results")}
      <p>Hey ${name},</p>
      <p>Yesterday we talked about Context Saturation. Today, I want to show you the cold, hard empirical data.</p>
      <p>We ran an identical test on the exact same bug in a TypeScript service using Cursor:</p>
      <div class="box">
        <strong>Traditional Unstructured Repository:</strong><br>
        • Tokens ingested: 46,200 tokens<br>
        • Time to resolution: 48.4 seconds<br>
        • Result: Hallucinated an outdated library and broke two adjacent tests.
      </div>
      <div class="box" style="background: #f0fdf4; border-color: #bbf7d0;">
        <strong>With agent-folders Architecture (6-Level Context):</strong><br>
        • Tokens ingested: <strong>820 tokens</strong> (98% reduction!)<br>
        • Time to resolution: <strong>8.2 seconds</strong><br>
        • Result: Surgical 3-line patch, verified with 0 defects.
      </div>
      <p>Test the architecture on your machine right now:</p>
      <div style="background: #0f172a; color: #38bdf8; padding: 14px; border-radius: 8px; font-family: monospace;">
        npx agent-folders doctor
      </div>
      <p style="margin-top: 20px;">Tomorrow, I'll show you how to scaffold full-stack apps and AI agents in 3 seconds.</p>
      <p>Best regards,<br><strong>Rick Jefferson</strong></p>
      ${emailFooter(unsub)}
    `
  },
  3: {
    subject: "How to scaffold 10 different projects in 3 seconds",
    html: (name, unsub) => `
      ${emailHeader("Universal Scaffolding Engine")}
      <p>Hey ${name},</p>
      <p>Instead of spending 45 minutes configuring TypeScript, test runners, folder boundaries, and prompt rules every time you want to build a new idea...</p>
      <p>You run one command:</p>
      <div style="background: #0f172a; color: #38bdf8; padding: 14px; border-radius: 8px; font-family: monospace;">
        npx agent-folders scaffold full-stack-app my-saas
      </div>
      <p style="margin-top: 16px;">We built 10 production archetypes directly into the engine:</p>
      <ul>
        <li><strong>Full-Stack Applications</strong> (API + Client + Config + Tests)</li>
        <li><strong>Autonomous AI Agents</strong> (Tools + System Prompts + Eval Harness)</li>
        <li><strong>Multi-Agent Swarms</strong> (Orchestrator + Worker Protocol)</li>
        <li><strong>ETL Data Pipelines & Automation Crons</strong></li>
        <li><strong>Backend Microservices & Landing Pages</strong></li>
      </ul>
      <center><a href="https://github.com/rjbizsolution23-wq/agent-folders#readme" class="btn">View All 10 Archetypes</a></center>
      <p>Tomorrow: How an agency uses this to deliver client applications in 48 hours without merge conflicts.</p>
      <p>Best,<br><strong>Rick Jefferson</strong></p>
      ${emailFooter(unsub)}
    `
  },
  4: {
    subject: "Case Study: How an agency ships client apps in 48 hours",
    html: (name, unsub) => `
      ${emailHeader("Multi-Developer Team Architecture")}
      <p>Hey ${name},</p>
      <p>When multiple developers work together using AI, chaos usually happens:</p>
      <p>Dev A edits <span class="code">.cursorrules</span>. Dev B tweaks <span class="code">CLAUDE.md</span>. Soon, no two agents are following the same linting, testing, or security guidelines.</p>
      <div class="box">
        <strong>The Solution: Single Canonical Source of Truth</strong><br>
        In <code>agent-folders</code>, all rules live in <span class="code">.ai/policies/</span>. When you run <span class="code">npx agent-folders sync</span>, it automatically regenerates CLAUDE.md, .cursorrules, and GEMINI.md simultaneously.
      </div>
      <p>And our automated drift validator runs in CI to guarantee that no unauthorized prompt drifts reach production.</p>
      <p>Tomorrow, I'm opening up the complete <strong>Pro Developer Kit</strong> with 25+ production skills and the 1-click Cloudflare edge deployer at a 60% early-bird discount.</p>
      <p>Keep an eye on your inbox!</p>
      <p>Warmly,<br><strong>Rick Jefferson</strong></p>
      ${emailFooter(unsub)}
    `
  },
  5: {
    subject: "The Pro Developer Kit is live (Save $200 today)",
    html: (name, unsub) => `
      ${emailHeader("Pro Developer Kit Launch")}
      <p>Hey ${name},</p>
      <p>The open-core version of <strong>agent-folders</strong> gives you the foundational architecture.</p>
      <p>If you want to turn your AI coding assistant into a complete software engineering organization, the <strong>Pro Developer Kit</strong> is now officially available:</p>
      <div class="box">
        <strong>What's Inside Pro:</strong><br>
        ✓ <strong>25+ Production-Tested Agent Skills</strong> (Migrations, Pen-Testing, Stripe API, SEO, Profiling)<br>
        ✓ <strong>Model Context Protocol (MCP) Hub</strong> (Filesystem, Cloudflare, GitHub, Puppeteer)<br>
        ✓ <strong>Cloudflare 1-Click Deployer</strong> (Ship edge microservices in seconds)<br>
        ✓ <strong>Interactive Terminal Support Oracle</strong> (<span class="code">npx agent-folders support</span>)<br>
        ✓ <strong>Private Discord & Lifetime Updates</strong>
      </div>
      <p>Standard Price: <del>$297</del><br>
      <strong>Today's Early-Bird Lifetime Access: $97</strong></p>
      <center><a href="https://rjbusinesssolutions.org" class="btn">Claim Your Pro License Now ($97)</a></center>
      <p style="font-size: 13px; color: #64748b;">Instant Zelle Activation: Send $97 to <strong>rjbizsolution23@gmail.com</strong> with memo "[Your Name] + Pro".</p>
      <p>Build faster, burn fewer tokens, and write cleaner software.</p>
      <p>To your success,<br><strong>Rick Jefferson</strong><br>CEO, RJ Business Solutions</p>
      ${emailFooter(unsub)}
    `
  }
};
