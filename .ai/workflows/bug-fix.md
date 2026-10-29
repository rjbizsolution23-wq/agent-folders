# Bug Fix Workflow

## Stage 1: Reproduce
- Write a minimal failing test case that demonstrates the defect.
- Capture exact error message, stack trace, and unexpected state.

## Stage 2: Root-Cause Analysis
- Activate `.ai/skills/debugging/SKILL.md`.
- Inspect code paths; isolate the faulty condition or broken assumption.

## Stage 3: Surgical Patch
- Modify only the affected logic.
- Avoid introducing ancillary changes or style refactors.

## Stage 4: Regression Test
- Confirm the reproduction test now passes.
- Run the full test suite to ensure zero unintended side effects.

## Stage 5: Prevention & Log
- Document root cause and remedy in pull request or commit message.
