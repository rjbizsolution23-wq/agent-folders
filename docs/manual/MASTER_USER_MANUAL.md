# 📘 Universal AI-Native Development Architecture (UANDA 2026)
## The Definitive Guided Master Manual & Operator Handbook
**Authoritative Documentation for Rick Jefferson | RJ Business Solutions**

---

## Table of Contents
1. [Executive Overview & Philosophy](#1-executive-overview--philosophy)
2. [Quickstart & 60-Second Setup](#2-quickstart--60-second-setup)
3. [The 6-Level Progressive Context Disclosure Protocol](#3-the-6-level-progressive-context-disclosure-protocol)
4. [Platform Adapters: Claude Code, Cursor, Codex & Gemini](#4-platform-adapters-claude-code-cursor-codex--gemini)
5. [Model Context Protocol (MCP) Hub Setup](#5-model-context-protocol-mcp-hub-setup)
6. [The 10 Project Scaffolding Archetypes](#6-the-10-project-scaffolding-archetypes)
7. [The 6 Portable Core Skills (Authoring & Verification)](#7-the-6-portable-core-skills-authoring--verification)
8. [Automated CI/CD Quality Gates & Drift Detection](#8-automated-cicd-quality-gates--drift-detection)
9. [Deploying to Cloudflare Edge in 1 Click](#9-deploying-to-cloudflare-edge-in-1-click)
10. [End-to-End Troubleshooting Guide](#10-end-to-end-troubleshooting-guide)
11. [Escalation & Official Customer Support](#11-escalation--official-customer-support)

---

## 1. Executive Overview & Philosophy

### Why Traditional AI Development Fails
Most developers experience severe failures when their repositories grow beyond 5 to 10 files:
- **Agent Amnesia**: AI models re-read the entire codebase on every prompt, burning 30,000 to 100,000 tokens per interaction.
- **Lost in the Middle**: When prompts contain too much documentation, LLM reasoning degrades by up to 35%, causing hallucinations and forgotten rules.
- **Instruction Drift**: Maintaining separate instructions in `CLAUDE.md`, `.cursorrules`, and custom system prompts leads to conflicting rules within 30 days.

### The UANDA Solution
`agent-folders` provides **one canonical source of truth** in `.ai/`. Platform-specific files (`CLAUDE.md`, `.cursorrules`, `GEMINI.md`, `AGENTS.md`) are generated thin pointers. Agents access project knowledge on a strict need-to-know basis, cutting token burn by 70% while guaranteeing identical coding standards across all AI platforms.

---

## 2. Quickstart & 60-Second Setup

### Option A: Initialize in Any Existing Repository (via npm)
```bash
# Navigate to your project directory
cd my-project

# Initialize the architecture
npx agent-folders init

# Run system health checks
npx agent-folders doctor
```

### Option B: Bootstrap via cURL One-Liner
```bash
curl -fsSL https://raw.githubusercontent.com/rjbizsolution23-wq/agent-folders/main/install.sh | bash
```

### Option C: 1-Click GitHub Template
Visit **[https://github.com/rjbizsolution23-wq/agent-folders/generate](https://github.com/rjbizsolution23-wq/agent-folders/generate)**, click **"Use this template"**, and clone your new private repository.

---

## 3. The 6-Level Progressive Context Disclosure Protocol

Never instruct an AI agent to "read the entire repository." Instead, train your agents or prompts to follow the 6-Level Context Ladder:

```
[Level 0] AGENTS.md (Root pointer, <300 tokens)
    │
    ├── [Level 1] .ai/policies/*.md (Task-specific rules, loaded on demand)
    ├── [Level 2] .ai/context/*.md (Architecture/domain specs, loaded on demand)
    ├── [Level 3] .ai/skills/<name>/SKILL.md (Task workflows, loaded on trigger)
    ├── [Level 4] projects/<app>/src/* (Source code files, targeted edits)
    └── [Level 5] .ai/context/decisions-log.md (Historical decisions, edge cases)
```

1. **Level 0 (Global Pointer)**: `AGENTS.md` is loaded at session start. It establishes discovery rules and links to canonical policies.
2. **Level 1 (Policies)**: Read only the policy relevant to the current task:
   - Writing code? Read `.ai/policies/engineering.md`.
   - Modifying auth or credentials? Read `.ai/policies/security.md`.
   - Adding tests? Read `.ai/policies/testing.md`.
3. **Level 2 (Architecture & Conventions)**: `.ai/context/architecture.md` is consulted only during architectural design or directory reorganization.
4. **Level 3 (Skills & Workflows)**: Modular capability instructions loaded strictly when their trigger condition is met (e.g., `.ai/skills/debugging/SKILL.md` when a test fails).
5. **Level 4 (Execution Targets)**: Direct source code under `projects/<app>/src/`.
6. **Level 5 (Archival History)**: Historical decisions recorded in `.ai/context/decisions-log.md`.

---

## 4. Platform Adapters: Claude Code, Cursor, Codex & Gemini

### How Synchronization Works
Whenever you change a policy in `.ai/policies/`:
```bash
npx agent-folders sync
```
This updates:
- `CLAUDE.md` (for Anthropic Claude Code)
- `.cursorrules` (for Cursor IDE)
- `GEMINI.md` (for Gemini CLI / Antigravity)
- `AGENTS.md` (for OpenAI Codex & generic agents)

### Drift Detection
To verify that no engineer manually edited `CLAUDE.md` or `.cursorrules` out-of-sync:
```bash
npx agent-folders doctor
# or: python3 scripts/check-instruction-drift.py
```

---

## 5. Model Context Protocol (MCP) Hub Setup

Configured in [`.ai/mcp/mcp.config.json`](file:///Users/kalivibecoding/Downloads/agent-folders/.ai/mcp/mcp.config.json).

### Activating in Cursor
1. Open Cursor Settings -> **Features** -> **MCP**.
2. Click **Add New MCP Server**.
3. Point to `.ai/mcp/mcp.config.json` or paste the individual server command:
   - Command: `npx`
   - Args: `-y @modelcontextprotocol/server-filesystem ./projects ./packages ./docs`

### Activating in Claude Code
Claude Code automatically inspects `.ai/mcp/mcp.config.json`. Ensure your environment variables are exported:
```bash
export GITHUB_TOKEN="ghp_your_token_here"
export CLOUDFLARE_API_TOKEN="your_cloudflare_token_here"
```

---

## 6. The 10 Project Scaffolding Archetypes

Run `npx agent-folders scaffold <archetype> <project-name>` to generate pre-configured project folders under `projects/`:

| Archetype | Typical Use Case | Generated Files |
| :--- | :--- | :--- |
| `simple-website` | Marketing landing pages, portfolio sites | `index.html`, `style.css`, `app.js`, `README.md` |
| `full-stack-app` | Web application with API, database, tests | `src/index.ts`, `src/server.ts`, `tests/`, `config/` |
| `api-service` | Backend REST/GraphQL microservices | `src/routes.ts`, `src/controller.ts`, `src/middleware.ts` |
| `ai-agent` | Standalone autonomous AI agent | `agent/core.py`, `agent/tools.py`, `agent/prompts.py` |
| `multi-agent-app`| Multi-agent orchestrator & workers | `orchestrator.py`, `agents/worker.py`, `protocols/` |
| `automation-pipeline`| Cron tasks, webhook consumers | `pipeline.py`, `tasks/fetch.py`, `tasks/process.py` |
| `data-pipeline` | ETL data extraction and transformation | `etl/extract.py`, `etl/transform.py`, `etl/load.py` |
| `reusable-library`| Shared npm or Python utility package | `src/index.ts`, `tests/`, `package.json` |
| `research-project`| Machine learning, data science, notebooks | `notebooks/`, `data/raw/`, `src/model.py` |
| `repo-modernization`| Refactoring legacy monoliths | `migration-plan.md`, `shims/legacy.ts` |

---

## 7. The 6 Portable Core Skills

Located in `.ai/skills/`:
- **`research`**: Source citation, API verification, RFC validation.
- **`planning`**: Task contract decomposition into reversible micro-steps.
- **`implementation`**: Surgical code edits, strict typing, zero gratuitous refactoring.
- **`debugging`**: Root cause hypothesis formulation and minimal reproduction testing.
- **`review`**: Adversarial code audit for OWASP vulnerabilities and secret leaks.
- **`optimization`**: Memory, token budget, and latency profiling.

### Adding a New Skill
1. Create `.ai/skills/<skill-name>/SKILL.md`.
2. Add metadata frontmatter (`name`, `description`, `version`).
3. Create `.ai/skills/<skill-name>/tests/test_contract.py`.
4. Run: `python3 -m unittest discover -s .ai/skills -p "test_*.py"`.

---

## 8. Automated CI/CD Quality Gates & Drift Detection

Every push or pull request is validated by `.github/workflows/validate.yml`:
1. **Required Files Gate**: Asserts all canonical directories, policies, and scripts exist.
2. **Broken Link Scanner**: Traverses all markdown files in `.ai/` and reports dead relative links.
3. **Token Budget Gate**: Flags any policy or root instruction exceeding its token ceiling.
4. **Drift Detection**: Asserts that `CLAUDE.md`, `.cursorrules`, and `GEMINI.md` match their canonical templates.
5. **Contract Tests**: Runs all unit tests and skill validation scripts.

---

## 9. Deploying to Cloudflare Edge in 1 Click

To deploy any project in `projects/<project-name>` to Cloudflare's global edge network:
```bash
./scripts/deploy-cloudflare.sh <project-name>
```
The script auto-detects `wrangler.toml`, bundles the TypeScript source, applies compatibility flags, and deploys directly to your Cloudflare account.

---

## 10. End-to-End Troubleshooting Guide

### Issue 1: "AI Agent ignores my engineering or security rules"
- **Cause**: The agent is reading an outdated or disconnected prompt file.
- **Fix**: Run `npx agent-folders sync` to force platform adapters to re-link to `.ai/policies/`. In your prompt, tell the agent: *"Read .ai/policies/engineering.md before continuing."*

### Issue 2: "Cursor burns too many tokens on every edit"
- **Cause**: Cursor indexing is ingesting your entire `node_modules`, `dist`, or test output directories.
- **Fix**: Ensure your `.cursorignore` and `.gitignore` exclude `node_modules/`, `dist/`, `.venv/`, and `tests/`.

### Issue 3: "Drift detection failed in CI"
- **Cause**: A developer modified `CLAUDE.md` or `.cursorrules` directly instead of updating `.ai/policies/`.
- **Fix**: Make your edits inside `.ai/policies/` or `adapters/`, then run `npx agent-folders sync`, commit, and push.

---

## 11. Escalation & Official Customer Support

If you encounter an issue not covered in this handbook:
- **Interactive Terminal Support**: Run `npx agent-folders support` or `python3 scripts/support-oracle.py`.
- **GitHub Issues**: [https://github.com/rjbizsolution23-wq/agent-folders/issues](https://github.com/rjbizsolution23-wq/agent-folders/issues)
- **Direct Executive Support**: `support@rjbusinesssolutions.org`
- **CEO & Lead Architect**: Rick Jefferson ([https://rjbusinesssolutions.org](https://rjbusinesssolutions.org))
