# Deliverables 4 & 5: Universal Reference Architecture & File Blueprint

## Reference Structure
UANDA 2026 establishes a modular, decoupled repository topology:
- **Root Layer**: Canonical pointers and platform-specific thin adapters (`AGENTS.md`, `CLAUDE.md`, `.cursorrules`, `GEMINI.md`).
- **`.ai/` Store**: Invariant policies, system context, portable skills, structured workflows, and JSON schemas.
- **`adapters/`**: Template sources and translation rules for different AI agent platforms.
- **`projects/` & `packages/`**: Isolated execution targets avoiding cyclical dependencies.
- **`scripts/`**: Deterministic automation for validation, drift detection, and scaffolding.

## File-by-File Responsibility Matrix

| File Path | Purpose | Reader | Loading Frequency | Ownership |
| :--- | :--- | :--- | :--- | :--- |
| `AGENTS.md` | Global entrypoint and progressive context index | All Agents | Every session (Level 0) | System Architect |
| `CLAUDE.md` | Thin adapter for Claude Code | Claude Code | On Claude launch | Generated (Sync) |
| `.cursorrules` | Thin adapter for Cursor IDE | Cursor IDE | On file open | Generated (Sync) |
| `GEMINI.md` | Thin adapter for Gemini CLI | Gemini CLI | On session start | Generated (Sync) |
| `.ai/manifest.yaml` | System declaration and platform bindings | CLI Scripts | During validation/sync | DevOps / SRE |
| `.ai/policies/engineering.md` | Coding conventions, typing, error handling | Agents / Humans | Level 1 (on code change) | Staff Engineer |
| `.ai/policies/security.md` | Credential rules, permissions, approval gates| Agents / Humans | Level 1 (on secret/system ops)| Security Architect |
| `.ai/policies/testing.md` | Test pass rules, anti-reward-hacking | Agents / Humans | Level 1 (on test authoring) | QA Lead |
| `.ai/skills/<name>/SKILL.md` | Portable capability definition and procedure | Agents | Level 3 (on specific trigger)| Capability Author |
| `scripts/validate-architecture.py` | Automated compliance and broken link checker | CI / Agents | Pre-commit / CI gate | Platform Engineer |
| `scripts/check-instruction-drift.py`| Detects desynchronization in adapters | CI / Agents | Pre-commit / CI gate | Platform Engineer |
