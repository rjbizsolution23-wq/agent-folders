# Engineering Policy (UANDA 2026)

## 1. Simplicity & YAGNI
- Implement the simplest design that satisfies verified requirements.
- Never add speculative abstractions, unrequested framework layers, or unused helper functions.
- Favor standard library and platform-native capabilities over third-party dependencies.

## 2. Type Safety & Contracts
- All TypeScript code must run under `strict: true` with zero `@ts-ignore` or `any` allocations.
- All Python code must include type hints (`mypy --strict` compatible).
- Public APIs and cross-module boundaries must enforce input validation via JSON schema or Zod.

## 3. Surgical Edits
- When updating existing code, touch only lines directly relevant to the task.
- Preserve existing comments, formatting, and docstrings unrelated to your changes.
- Never perform gratuitous cosmetic refactorings in a bug fix or feature patch.

## 4. Error Handling
- Never catch and swallow exceptions silently.
- Provide descriptive, actionable error messages with appropriate context (e.g., parameter values, status codes).
- Support deterministic retry with exponential backoff on transient network calls.
