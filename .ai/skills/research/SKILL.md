---
name: research
description: Systematic evidence retrieval, API verification, and citation synthesis.
version: "1.0.0"
---

# Skill: Research

## Trigger Condition
Invoked when verifying external libraries, API specifications, or competitive implementations.

## Inputs
- Task description and acceptance criteria.
- Relevant workspace paths.

## Procedure
1. Define exact research query and search parameters.
2. Inspect primary sources (official documentation, GitHub releases, RFCs).
3. Cross-validate facts across at least two independent sources.
4. Record date of source and exact URLs in evidence summary.

## Expected Output
Structured report or verified code diff matching task acceptance criteria.

## Verification
Run associated contract test: `python3 -m unittest .ai/skills/research/tests/test_contract.py`
