# Deliverable 16: Quickstart Guide

## Installation & Setup
```bash
# Clone or navigate to the workspace
cd "/Users/kalivibecoding/Downloads/agent-2026"

# 1. Run architecture validation
python3 scripts/validate-architecture.py

# 2. Check for instruction drift
python3 scripts/check-instruction-drift.py

# 3. Synchronize adapters across platforms
python3 scripts/sync-adapters.py

# 4. Run automated test suite
python3 -m unittest discover tests/unit

# 5. Scaffold a new project
python3 scripts/scaffold-project.py --type full-stack-app --name payments-service
```
