# Documentation Policy (UANDA 2026)

## 1. Documentation-as-Code
- Documentation must be version-controlled alongside the code it describes.
- Keep documentation concise, accurate, and actionable.

## 2. Architectural Decision Records (ADRs)
- Major structural changes, dependency adoptions, or architectural pivots must be documented as an ADR in `docs/decisions/`.
- Use the standard format: Status, Context, Decision, Consequences (Pros & Cons).

## 3. Stale Documentation Prevention
- Code changes must update corresponding documentation in the same commit.
- The architecture validator flags broken links, missing references, and outdated version pins.
