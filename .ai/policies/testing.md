# Testing Policy (UANDA 2026)

## 1. Verification Before Completion
- No task is marked complete without deterministic execution verification.
- Static claims ("should work") are rejected; proof of test execution output is mandatory.

## 2. Test Granularity
- **Unit Tests**: Test pure business logic in isolation. Fast execution (<100ms per test).
- **Integration Tests**: Test cross-module boundaries, persistence layers, and API adapters.
- **Contract Tests**: Verify schemas, input/output structures, and error states.

## 3. Anti-Reward-Hacking
- Never delete or comment out existing tests to force a build to pass.
- Never write tautological assertions (e.g., `expect(true).toBe(true)`).
- If an existing test fails, identify whether it exposed a genuine regression or represents an obsolete contract before proposing test modifications.
