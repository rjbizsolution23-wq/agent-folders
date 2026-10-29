# Deliverables 6 & 8: Agent Configuration & Intelligent Task Routing

## Intelligent Task Routing Matrix

To prevent agent sprawl and excessive token burn, routing follows an escalating complexity ladder:

| Task Characteristics | Execution Mechanism | Overhead | Human Gate |
| :--- | :--- | :--- | :--- |
| Single-file bug fix / formatting | Direct single-agent instruction | Minimal (<1k tokens) | No |
| Deterministic repo check / sync | Deterministic CLI script (`scripts/*.py`) | Zero LLM tokens | No |
| Multi-step feature addition | Single agent + Skill (`.ai/skills/planning`) | Low (<4k tokens) | No |
| Complex defect localization | Single agent + Skill (`.ai/skills/debugging`)| Moderate (<6k tokens) | No |
| Architectural reorganization | Single agent + Human approval plan | Moderate (<8k tokens) | **Yes** |
| Disjoint multi-module overhaul | Parallel subagents with barrier sync | High (15k+ tokens) | **Yes** |
| Production release / DB purge | Script + Strict Human Approval | Minimal | **Mandatory** |

## Default Rule: Capabilities Over Agents
Never spawn an autonomous multi-agent hierarchy when a reusable Python script or single agent loading a focused `SKILL.md` can complete the task deterministically.
