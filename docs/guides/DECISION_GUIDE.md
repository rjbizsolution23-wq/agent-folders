# Deliverable 12: Architecture Decision Guide

Use this decision tree to prevent directory proliferation and unnecessary complexity:

```
[Need to add new functionality]
  │
  ├─► Is it a global rule or invariant?
  │     └─► Add to .ai/policies/<policy>.md
  │
  ├─► Is it a reusable procedural capability?
  │     ├─► Can it be a deterministic script?
  │     │     └─► YES: Put in scripts/<name>.py
  │     └─► NO (Requires LLM reasoning):
  │           └─► Create portable skill in .ai/skills/<name>/SKILL.md
  │
  ├─► Is it an independent deployable or application?
  │     └─► Scaffold into projects/<app-name>/ via scripts/scaffold-project.py
  │
  ├─► Is it shared code used by multiple projects?
  │     └─► Place in packages/shared/
  │
  └─► Is it an autonomous multi-agent swarm?
        └─► WARNING: Require proof that single agent + skill is insufficient.
```
