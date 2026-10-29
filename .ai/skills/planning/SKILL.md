---
name: planning
description: Task decomposition, complexity estimation, and dependency mapping.
version: "1.0.0"
---

# Skill: Planning

## Trigger Condition
Invoked before non-trivial multi-file feature additions or architectural refactors.

## Inputs
- Task description and acceptance criteria.
- Relevant workspace paths.

## Procedure
1. Clarify acceptance criteria and boundary conditions.
2. Map dependency graph and identify affected files.
3. Decompose task into sequential, reversible micro-steps.
4. Define verification commands for each step.

## Expected Output
Structured report or verified code diff matching task acceptance criteria.

## Verification
Run associated contract test: `python3 -m unittest .ai/skills/planning/tests/test_contract.py`
