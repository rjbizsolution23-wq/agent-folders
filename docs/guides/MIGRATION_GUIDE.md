# Deliverable 15: Migration Guide to UANDA 2026

## 4-Step Non-Disruptive Migration

### Step 1: Create the Canonical `.ai/` Store
```bash
mkdir -p .ai/{policies,context,skills,workflows,templates,schemas}
```

### Step 2: Extract Existing Rules
- Consolidate disparate rules from `.cursorrules`, `CLAUDE.md`, or custom prompts into:
  - `.ai/policies/engineering.md`
  - `.ai/policies/security.md`

### Step 3: Replace Root Files with Thin Adapters
- Replace bulky `CLAUDE.md`, `.cursorrules`, `GEMINI.md` with thin pointers to `AGENTS.md`.
- Run `python3 scripts/sync-adapters.py`.

### Step 4: Validate & Gate
- Add `python3 scripts/validate-architecture.py` to your pre-commit hooks or CI workflow.
