# `.ai/` Canonical Knowledge & Policy Store

This directory is the **single authoritative source of truth** for all AI agent behaviors, conventions, capabilities, and project knowledge.

### Directory Organization
- `manifest.yaml`: Machine-readable declaration of system capabilities, adapters, and validation rules.
- `policies/`: Invariant constraints that govern all execution (security, engineering, testing, documentation).
- `context/`: System background, target architecture, coding conventions, and architectural decision records.
- `skills/`: Modular, self-contained capabilities (containing `SKILL.md`, scripts, references, and validation tests).
- `workflows/`: Multi-step recipes for recurring software lifecycle stages.
- `templates/`: Structured templates for tasks, decisions, and session handoffs.
- `schemas/`: Machine-verifiable JSON schemas for tasks, capabilities, and system manifests.

Do NOT edit generated adapter files at the repository root (`CLAUDE.md`, `.cursorrules`, `GEMINI.md`) directly. Update canonical files here and run `python3 scripts/sync-adapters.py`.
