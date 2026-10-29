# Release Workflow

## Pre-Release Gates
1. Run all unit and integration tests (`npm test` / `pytest`).
2. Run architecture validation: `python3 scripts/validate-architecture.py`.
3. Check instruction drift: `python3 scripts/check-instruction-drift.py`.
4. Verify SemVer tag and changelog updates.

## Approval Gate
- Production release tags require explicit human authorization.
