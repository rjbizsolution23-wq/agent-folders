# Feature Development Workflow

## Stage 1: Discovery & Scoping
- Read user requirements and acceptance criteria.
- Consult `.ai/context/architecture.md` to identify module boundaries.

## Stage 2: Planning & Contract
- Create an execution plan using `.ai/templates/task.md`.
- Identify affected files, schemas, and test requirements.

## Stage 3: Test-First or Test-Coincident Implementation
- Write failing unit/integration tests establishing the acceptance criteria.
- Implement the minimal code necessary to make tests pass.
- Adhere strictly to `.ai/policies/engineering.md` and `security.md`.

## Stage 4: Verification
- Run local unit and integration tests.
- Run `python3 scripts/validate-architecture.py`.

## Stage 5: Review & Documentation
- Self-review diff against `.ai/skills/review/SKILL.md`.
- Update relevant docs in `docs/` or `projects/<app>/README.md`.
