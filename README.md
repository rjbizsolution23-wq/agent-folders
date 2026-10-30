# Universal AI-Native Development Architecture (UANDA 2026) — Community Edition
> **Free Open-Source Package for Builders & Solo Developers**
> 
> **Included in this Free Repository:**
> - ✓ Full GitHub Template Repository
> - ✓ Canonical `AGENTS.md` (Level 0 Root Pointer) & `.ai/` Store
> - ✓ 3 Basic Core Skills (`research`, `planning`, `implementation`)
> - ✓ Architecture Validator CLI (`python3 scripts/validate-architecture.py`)
> - ✓ Community Discord Access & Multi-Platform Adapters (`CLAUDE.md`, `.cursorrules`, `GEMINI.md`)
>
> *(For advanced archetypes, 25+ production skills, automated penetration testing, Stripe nexus, and Cloudflare email drip engine, see the private [Pro & Agency Vault](https://github.com/rjbizsolution23-wq/agent-folders-pro))*


UANDA 2026 is an evidence-backed, modular architecture engineered to operate seamlessly across **Claude Code**, **OpenAI Codex**, **Cursor**, **Gemini CLI / Antigravity**, and autonomous agent swarms.

## Core Architectural Principles
1. **Canonical Source of Truth**: All policies, skills, context, and workflows reside in `.ai/`. Platform-specific files (`CLAUDE.md`, `.cursorrules`, `GEMINI.md`) are generated thin adapters.
2. **Progressive Context Disclosure (Levels 0-5)**: Prevents context window saturation, token exhaustion, and hallucination by loading context just-in-time.
3. **Capabilities Before Agents**: Always prefer a deterministic script or single reusable skill over an autonomous subagent.
4. **Drift Detection & Architecture Validation**: Built-in CLI scripts to prevent instruction drift, broken references, and orphaned files.


## 🚀 Installation & Distribution Methods

Choose your preferred way to install and use `agent-folders`:

### Method 1: Instant npx / npm CLI (Recommended)
```bash
# Initialize into your current project directory:
npx agent-folders init

# Run system health doctor:
npx agent-folders doctor

# Scaffold any project archetype:
npx agent-folders scaffold full-stack-app my-saas
```

### Method 2: One-Line Shell / cURL Installer
```bash
curl -fsSL https://raw.githubusercontent.com/rjbizsolution23-wq/agent-folders/main/install.sh | bash
```

### Method 3: GitHub 1-Click Template
Click **[Use this template](https://github.com/rjbizsolution23-wq/agent-folders/generate)** on GitHub to create a new repository instantly.

### Method 4: Python pip
```bash
pip install git+https://github.com/rjbizsolution23-wq/agent-folders.git
agent-folders doctor
```

### Method 5: Docker Sandbox
```bash
docker build -t agent-folders .
docker run --rm agent-folders doctor
```

## Quickstart
```bash
# 1. Validate repository structure and token budgets
python3 scripts/validate-architecture.py

# 2. Check for instruction drift between canonical .ai and platform adapters
python3 scripts/check-instruction-drift.py

# 3. Synchronize platform adapters (CLAUDE.md, .cursorrules, GEMINI.md)
python3 scripts/sync-adapters.py

# 4. Scaffold a new project (e.g., web-app, ai-agent, api-service)
python3 scripts/scaffold-project.py --type full-stack-app --name dashboard-v1

# 5. Run test suite
python3 -m unittest discover tests/unit
```

## Directory Structure Overview
```
agent-2026/
├── AGENTS.md                  # Canonical agent root instructions (Level 0)
├── CLAUDE.md                  # Claude Code thin adapter
├── .cursorrules               # Cursor IDE thin adapter
├── GEMINI.md                  # Gemini CLI / Antigravity thin adapter
├── .ai/                       # Canonical project knowledge
│   ├── manifest.yaml          # System metadata & platform mappings
│   ├── policies/              # Engineering, security, testing, docs policies
│   ├── context/               # Project vision, architecture, conventions
│   ├── skills/                # Portable agent skills (SKILL.md + tests)
│   ├── workflows/             # Deterministic recipes (feature, bugfix, release)
│   ├── templates/             # Task, decision, handoff templates
│   └── schemas/               # JSON schemas for validation
├── adapters/                  # Platform adapter templates & sync rules
├── docs/                      # Architectural research, benchmarks & guides
├── projects/                  # Application micro-projects
├── packages/                  # Shared libraries & utilities
├── scripts/                   # Validation, drift-check, scaffolding CLI
└── tests/                     # Unit tests & benchmark harness
```
