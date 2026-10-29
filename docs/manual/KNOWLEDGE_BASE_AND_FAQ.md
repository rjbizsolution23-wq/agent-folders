# 💡 Universal Knowledge Base & 30-Question FAQ
### Guided Problem Resolution & Practical Troubleshooting

---

### Q1: What makes `agent-folders` different from standard repository templates?
`agent-folders` is built specifically for **AI-assisted and autonomous agent development**. Rather than dumping monolithic context onto the model, it enforces a 6-Level Progressive Context Ladder that prevents context window saturation, eliminates instruction drift across tools (Claude, Cursor, Codex, Gemini), and includes built-in architecture validators.

---

### Q2: How do I initialize `agent-folders` in an existing repository without breaking my current code?
Run:
```bash
npx agent-folders init
```
This safely copies the `.ai/` directory, platform adapters, and root instruction pointers into your repo. It **never overwrites** your existing source files.

---

### Q3: How do I tell Claude Code to use this architecture?
When using Claude Code in your terminal, it automatically detects `CLAUDE.md`. If you want to force it to use a specific skill:
```text
Claude, activate .ai/skills/debugging/SKILL.md to diagnose why tests in projects/example-app/ fail.
```

---

### Q4: How do I configure Cursor to use `.ai/policies/`?
Cursor automatically consumes `.cursorrules` at the repository root. Our adapter instructs Cursor to follow `AGENTS.md` and load policies from `.ai/policies/`. You can also tag specific policies in the Cursor Chat composer using `@.ai/policies/engineering.md`.

---

### Q5: How do I avoid "Lost in the Middle" errors and agent hallucinations?
1. Keep root `AGENTS.md` under 500 tokens.
2. Direct the agent to load only the specific policy or skill file needed for that exact prompt.
3. Use session handoff summaries (`.ai/templates/handoff.md`) when passing context between tasks.

---

### Q6: Can I use `agent-folders` for Python, Go, Rust, or Java projects?
Yes. The architecture is **language-agnostic**. While the scaffolding tool includes TypeScript and Python templates, the canonical policies, progressive context hierarchy, and platform adapters work identically for any programming language.

---

### Q7: How do I add my own custom skill?
1. Create a directory: `.ai/skills/<your-skill-name>/`
2. Add a `SKILL.md` with trigger conditions, inputs, step-by-step procedures, and expected outputs.
3. Add a contract test in `tests/test_contract.py`.
4. Validate with `python3 -m unittest discover -s .ai/skills -p "test_*.py"`.

---

### Q8: What is "Instruction Drift" and how do I prevent it?
Instruction drift occurs when different AI tools follow contradictory rules because someone updated `.cursorrules` but forgot to update `CLAUDE.md` or `AGENTS.md`. `agent-folders` prevents this by making `.ai/` the single canonical source of truth and running automated drift checks (`npx agent-folders doctor`).

---

### Q9: How do I set up Model Context Protocol (MCP) tools?
Inspect `.ai/mcp/mcp.config.json`. Export your API tokens (`GITHUB_TOKEN`, `CLOUDFLARE_API_TOKEN`) in your terminal profile (`.zshrc` or `.bashrc`), and configure your AI tool to point to this JSON file.

---

### Q10: How do I deploy a scaffolded project to production?
Run:
```bash
./scripts/deploy-cloudflare.sh <project-name>
```
This bundles and deploys the project to Cloudflare's global edge network.

---

### Q11: What do I do if an AI agent tries to delete my database or force push?
The security policy (`.ai/policies/security.md`) strictly prohibits destructive actions without human verification. In your system prompt or root instructions, agents are bound by this policy.

---

### Q12: How do I share code between different applications in `projects/`?
Place common utilities, interfaces, or helper functions in `packages/shared/src/`. Projects can import these modules directly, preventing duplication.

---

### Q13: Can I run `agent-folders` in Docker?
Yes:
```bash
docker build -t agent-folders .
docker run --rm agent-folders doctor
```

---

### Q14: How do I submit an official support ticket?
Fill out the structured template in [`docs/manual/SUPPORT_TICKET_TEMPLATE.md`](file:///Users/kalivibecoding/Downloads/agent-folders/docs/manual/SUPPORT_TICKET_TEMPLATE.md) and open an issue on GitHub or email `support@rjbusinesssolutions.org`.
