---
name: implementation
description: Surgical code construction, type safety adherence, and minimal diff modification.
version: "1.0.0"
---

# Skill: Implementation

## Trigger Condition
Invoked during active coding, feature additions, or bug fixes.

## Inputs
- Task description and acceptance criteria.
- Relevant workspace paths.

## Procedure
1. Read target files into context.
2. Apply edits matching existing conventions.
3. Enforce strict typing and error handling.
4. Keep diffs localized and clean.

## Expected Output
Structured report or verified code diff matching task acceptance criteria.

## Verification
Run associated contract test: `python3 -m unittest .ai/skills/implementation/tests/test_contract.py`
