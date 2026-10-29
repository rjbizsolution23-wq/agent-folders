#!/usr/bin/env python3
import os
import sys

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

def check_drift():
    adapters = [
        ("CLAUDE.md", "adapters/claude/CLAUDE.template.md"),
        (".cursorrules", "adapters/cursor/.cursorrules.template"),
        ("GEMINI.md", "adapters/gemini/GEMINI.template.md"),
    ]
    drift_detected = False
    for root_file, template_file in adapters:
        rf_path = os.path.join(REPO_ROOT, root_file)
        tf_path = os.path.join(REPO_ROOT, template_file)
        if not os.path.exists(rf_path):
            print(f"❌ Missing root adapter: {root_file}")
            drift_detected = True
            continue
        if not os.path.exists(tf_path):
            print(f"❌ Missing template adapter: {template_file}")
            drift_detected = True
            continue
        with open(rf_path, "r", encoding="utf-8") as f1, open(tf_path, "r", encoding="utf-8") as f2:
            if f1.read().strip() != f2.read().strip():
                print(f"❌ Drift detected between {root_file} and {template_file}")
                drift_detected = True
            else:
                print(f"✅ In sync: {root_file} matches {template_file}")
    
    if drift_detected:
        print("\n❌ Instruction drift detected. Run: python3 scripts/sync-adapters.py")
        sys.exit(1)
    else:
        print("\n🎉 All adapters are in sync with templates.")
        sys.exit(0)

if __name__ == "__main__":
    check_drift()
