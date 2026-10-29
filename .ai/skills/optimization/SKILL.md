---
name: optimization
description: Performance measurement, token budgeting, and code simplification.
version: "1.0.0"
---

# Skill: Optimization

## Trigger Condition
Invoked when latency, memory, or context token consumption exceeds thresholds.

## Inputs
- Task description and acceptance criteria.
- Relevant workspace paths.

## Procedure
1. Profile bottleneck using empirical measurements.
2. Eliminate redundant I/O, loops, or context tokens.
3. Benchmark before vs. after.
4. Document verified gain.

## Expected Output
Structured report or verified code diff matching task acceptance criteria.

## Verification
Run associated contract test: `python3 -m unittest .ai/skills/optimization/tests/test_contract.py`
