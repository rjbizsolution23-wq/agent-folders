#!/usr/bin/env python3
import os
import sys
import json
import re

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

def log_error(msg):
    print(f"❌ [ERROR] {msg}")

def log_success(msg):
    print(f"✅ [PASS] {msg}")

def check_required_files():
    required = [
        "AGENTS.md",
        "README.md",
        ".gitignore",
        ".ai/manifest.yaml",
        ".ai/policies/engineering.md",
        ".ai/policies/security.md",
        ".ai/policies/testing.md",
        ".ai/policies/documentation.md",
        ".ai/context/project.md",
        ".ai/context/architecture.md",
        "scripts/validate-architecture.py",
        "scripts/check-instruction-drift.py",
        "scripts/sync-adapters.py",
        "scripts/scaffold-project.py"
    ]
    all_ok = True
    for r in required:
        path = os.path.join(REPO_ROOT, r)
        if not os.path.exists(path):
            log_error(f"Missing required file: {r}")
            all_ok = False
    if all_ok:
        log_success("All required canonical files exist.")
    return all_ok

def check_broken_markdown_links():
    all_ok = True
    link_pattern = re.compile(r'\[([^\]]+)\]\(([^\)]+)\)')
    for root, _, files in os.walk(os.path.join(REPO_ROOT, ".ai")):
        for f in files:
            if f.endswith(".md"):
                filepath = os.path.join(root, f)
                with open(filepath, "r", encoding="utf-8") as fh:
                    content = fh.read()
                matches = link_pattern.findall(content)
                for text, link in matches:
                    if link.startswith("http://") or link.startswith("https://") or link.startswith("#"):
                        continue
                    # resolve relative link
                    target = os.path.normpath(os.path.join(root, link))
                    if not os.path.exists(target):
                        log_error(f"Broken link in {os.path.relpath(filepath, REPO_ROOT)}: '{link}' target not found")
                        all_ok = False
    if all_ok:
        log_success("No broken internal markdown links in .ai/.")
    return all_ok

def check_token_budgets():
    # Enforce rough token limits (1 word ~ 1.3 tokens)
    budget = {
        "AGENTS.md": 500,
        ".ai/policies/engineering.md": 1200,
        ".ai/policies/security.md": 1200,
    }
    all_ok = True
    for rel_path, max_tokens in budget.items():
        p = os.path.join(REPO_ROOT, rel_path)
        if os.path.exists(p):
            with open(p, "r", encoding="utf-8") as fh:
                words = len(fh.read().split())
            est_tokens = int(words * 1.3)
            if est_tokens > max_tokens:
                log_error(f"Token budget exceeded in {rel_path}: ~{est_tokens} tokens (limit: {max_tokens})")
                all_ok = False
            else:
                log_success(f"Token budget passed for {rel_path}: ~{est_tokens}/{max_tokens} tokens.")
    return all_ok

def main():
    print("=== Running UANDA Architecture Validator ===")
    r1 = check_required_files()
    r2 = check_broken_markdown_links()
    r3 = check_token_budgets()
    
    if r1 and r2 and r3:
        print("\n🎉 Architecture verification PASSED with 0 defects.")
        sys.exit(0)
    else:
        print("\n❌ Architecture verification FAILED.")
        sys.exit(1)

if __name__ == "__main__":
    main()
