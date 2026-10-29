# Deliverables 9 & 13: Self-Optimization & Benchmark Harness

## Self-Optimization Engine
The architecture incorporates automated checks to prevent code and instruction rot:
1. **Instruction Drift Auditing**: `python3 scripts/check-instruction-drift.py` checks that generated root adapters match template definitions.
2. **Broken Reference Detection**: Scans all `.md` files for missing relative paths and invalid file links.
3. **Token Budget Enforcement**: Flags files exceeding their allocated token ceiling.

## Benchmark Methodology
Ten standardized evaluation benchmarks measure architecture efficiency:
1. Simple website generation.
2. Full-stack microservice build.
3. Autonomous AI agent implementation.
4. Multi-agent workflow with sync barrier.
5. Automated ETL data pipeline.
6. Surgical feature addition to existing service.
7. Regression defect localization and patch.
8. Monorepo folder consolidation.
9. Project context recovery after session interruption.
10. Onboarding a cold AI coding agent.

Run the benchmark suite:
```bash
python3 tests/benchmarks/benchmark_harness.py
```
