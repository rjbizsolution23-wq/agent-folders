# Architectural Decision Log

## ADR-001: Canonical Source with Thin Platform Adapters
- **Date**: 2026-10-28
- **Status**: Accepted
- **Context**: Different AI coding tools look for different instruction files (`CLAUDE.md`, `.cursorrules`, `GEMINI.md`, `AGENTS.md`). Duplicating rules manually across all files causes documentation drift and synchronization failures.
- **Decision**: Designate `.ai/` as the single canonical source of truth. Generate or thin-link platform adapters from canonical policies via `scripts/sync-adapters.py`.
- **Consequences**:
  - Pros: Single place to edit; zero drift; automated validation.
  - Cons: Requires running sync script when canonical policies change.

## ADR-002: Capabilities & Skills Before Multi-Agent Swarms
- **Date**: 2026-10-28
- **Status**: Accepted
- **Context**: Multi-agent architectures incur high token costs, communication latency, and orchestration fragility.
- **Decision**: Enforce single-agent execution with modular skills as the default. Escalate to multi-agent only when subtasks are proven disjoint and parallelizable.
