# System Architecture

## Three-Tier Layering
1. **Universal Agent Control Layer (`.ai/` & `AGENTS.md`)**:
   Canonical policies, context, workflows, and task routing.
2. **Platform Adapter Layer (`adapters/`)**:
   Thin mappings translating canonical definitions into tool-native configs (`CLAUDE.md`, `.cursorrules`, `GEMINI.md`).
3. **Execution Layer (`projects/`, `packages/`, `scripts/`)**:
   Isolated applications, shared packages, automated CLI scripts, and test harnesses.

## Progressive Disclosure Model
```
[Level 0] AGENTS.md (Root pointer, <500 tokens)
    │
    ├── [Level 1] .ai/policies/*.md (Task-specific rules, loaded on demand)
    ├── [Level 2] .ai/context/*.md (Architecture/domain specs, loaded on demand)
    ├── [Level 3] .ai/skills/<name>/SKILL.md (Task workflows, loaded on trigger)
    ├── [Level 4] projects/<app>/src/* (Source code files, targeted edits)
    └── [Level 5] .ai/context/decisions-log.md (Historical decisions, edge cases)
```
