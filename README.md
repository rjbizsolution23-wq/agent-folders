# Universal AI-Native Development Architecture (UANDA 2026)
### Sovereign Cross-Platform Architecture for AI Coding Agents & Human Teams

UANDA 2026 is an evidence-backed, modular architecture engineered to operate seamlessly across **Claude Code**, **OpenAI Codex**, **Cursor**, **Gemini CLI / Antigravity**, and autonomous agent swarms.

## Core Architectural Principles
1. **Canonical Source of Truth**: All policies, skills, context, and workflows reside in `.ai/`. Platform-specific files (`CLAUDE.md`, `.cursorrules`, `GEMINI.md`) are generated thin adapters.
2. **Progressive Context Disclosure (Levels 0-5)**: Prevents context window saturation, token exhaustion, and hallucination by loading context just-in-time.
3. **Capabilities Before Agents**: Always prefer a deterministic script or single reusable skill over an autonomous subagent.
4. **Drift Detection & Architecture Validation**: Built-in CLI scripts to prevent instruction drift, broken references, and orphaned files.

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
