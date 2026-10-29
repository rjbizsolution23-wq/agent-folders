# Code Review Workflow

## Checklist
1. **Security**: Zero secrets, no SQL/command injection, validated input boundaries.
2. **Quality**: Adheres to strict typing, descriptive naming, no dead code.
3. **Tests**: New logic is covered by automated unit/integration tests.
4. **Context & Token Economy**: No bulky binary artifacts or gratuitous comment dumps.
5. **Architectural Consistency**: No cyclical dependencies across `projects/` and `packages/`.
