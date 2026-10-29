# Deliverable 7: Context Engineering & Progressive Disclosure

## The 6-Level Progressive Context Hierarchy

```
Level 0: Global Pointer (AGENTS.md)
  └── Read every session. Establishes discovery protocol and safety rules. (<500 tokens)

Level 1: Canonical Policies (.ai/policies/*.md)
  └── Read on-demand based on task type (security, testing, engineering). (<1200 tokens)

Level 2: Architecture & Project Context (.ai/context/*.md)
  └── Read only when making cross-module or foundational changes. (<2000 tokens)

Level 3: Portable Skills & Workflows (.ai/skills/<name>/SKILL.md)
  └── Activated strictly when the trigger condition matches. (<800 tokens each)

Level 4: Execution Targets (projects/<name>/src/*)
  └── Read only the targeted source files and immediate dependencies.

Level 5: Historical Decisions & Archival Memory (.ai/context/decisions-log.md)
  └── Queried only when resolving historical ambiguity or reviewing past ADRs.
```

## Anti-Pollution Rules
1. **No Monolithic Context Ingestion**: Never dump the entire repository into the initial prompt.
2. **Session Handoffs**: Long-running tasks record summaries using `.ai/templates/handoff.md` to prevent context drift across session resets.
3. **Stale Memory Invalidation**: The architecture validator flags docs and ADRs untouched for >180 days with unreferenced symbols.
