---
name: debugging
description: Root-cause localization, hypothesis testing, and deterministic defect elimination.
version: "1.0.0"
---

# Skill: Debugging

## Trigger Condition
Invoked when tests fail, errors are logged, or regressions occur.

## Inputs
- Task description and acceptance criteria.
- Relevant workspace paths.

## Procedure
1. Reproduce failure with a minimal test case.
2. Formulate 2-3 falsifiable hypotheses for root cause.
3. Inspect stack traces, logs, and inputs.
4. Implement fix and verify that test passes without regressions.

## Expected Output
Structured report or verified code diff matching task acceptance criteria.

## Verification
Run associated contract test: `python3 -m unittest .ai/skills/debugging/tests/test_contract.py`
