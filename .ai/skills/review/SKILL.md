---
name: review
description: Adversarial code review, security audit, and policy compliance verification.
version: "1.0.0"
---

# Skill: Review

## Trigger Condition
Invoked prior to committing changes or opening a pull request.

## Inputs
- Task description and acceptance criteria.
- Relevant workspace paths.

## Procedure
1. Check git diff for unintended file changes or secrets.
2. Verify compliance with .ai/policies/ (security, testing, engineering).
3. Check for edge cases, null-safety, and performance bottlenecks.
4. Generate structured feedback with pass/fail status.

## Expected Output
Structured report or verified code diff matching task acceptance criteria.

## Verification
Run associated contract test: `python3 -m unittest .ai/skills/review/tests/test_contract.py`
