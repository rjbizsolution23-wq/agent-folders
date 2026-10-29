#!/usr/bin/env python3
import os
import shutil

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

def sync():
    mappings = [
        ("adapters/claude/CLAUDE.template.md", "CLAUDE.md"),
        ("adapters/cursor/.cursorrules.template", ".cursorrules"),
        ("adapters/gemini/GEMINI.template.md", "GEMINI.md"),
    ]
    print("=== Synchronizing Platform Adapters ===")
    for src, dst in mappings:
        src_path = os.path.join(REPO_ROOT, src)
        dst_path = os.path.join(REPO_ROOT, dst)
        shutil.copyfile(src_path, dst_path)
        print(f"✅ Synchronized {dst} from {src}")
    print("🎉 All platform adapters synchronized successfully.")

if __name__ == "__main__":
    sync()
