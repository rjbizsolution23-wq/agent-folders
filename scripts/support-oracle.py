#!/usr/bin/env python3
import sys
import os

KB = {
    "init": "To initialize agent-folders into any directory, run: npx agent-folders init",
    "doctor": "To diagnose system health, broken links, and token budgets, run: npx agent-folders doctor",
    "sync": "To synchronize canonical policies to CLAUDE.md, .cursorrules, and GEMINI.md, run: npx agent-folders sync",
    "scaffold": "To scaffold a new project, run: npx agent-folders scaffold <archetype> <name>. Supported: simple-website, full-stack-app, api-service, ai-agent, multi-agent-app, automation-pipeline, data-pipeline, reusable-library, research-project, repo-modernization",
    "mcp": "Model Context Protocol configuration is located at .ai/mcp/mcp.config.json. Run 'npx agent-folders mcp' to view active tool servers.",
    "tokens": "To prevent token burn, use the 6-Level Progressive Context Protocol. Only load AGENTS.md at start, and load .ai/policies/ or .ai/skills/ strictly on-demand.",
    "drift": "Instruction drift occurs when platform adapters get out of sync. Fix it by running: npx agent-folders sync",
    "cloudflare": "Deploy any project to Cloudflare Workers edge network using: ./scripts/deploy-cloudflare.sh <project-name>",
    "claude": "Claude Code reads CLAUDE.md automatically. To invoke a skill, prompt: 'Activate .ai/skills/<name>/SKILL.md'.",
    "cursor": "Cursor reads .cursorrules automatically. You can also mention specific policies using @.ai/policies/engineering.md in chat.",
    "skills": "Portable skills live in .ai/skills/<name>/SKILL.md. Test all skills via: python3 -m unittest discover -s .ai/skills -p 'test_*.py'"
}

def print_banner():
    print("\033[1;34m" + "="*70)
    print(" 🎧 AGENT-FOLDERS INTERACTIVE CUSTOMER SUPPORT & DIAGNOSTIC ORACLE")
    print(" RJ Business Solutions | Guided Assistance Engine v2026.1")
    print("="*70 + "\033[0m\n")

def search_kb(query):
    query = query.lower().strip()
    matches = []
    for k, v in KB.items():
        if k in query or any(word in v.lower() for word in query.split()):
            matches.append((k, v))
    return matches

def main():
    print_banner()
    args = sys.argv[1:]
    
    if args:
        q = " ".join(args)
        print(f"🔎 Query: '{q}'\n")
        results = search_kb(q)
        if results:
            for topic, ans in results:
                print(f"\033[1;32m[Topic: {topic.upper()}]\033[0m")
                print(f"{ans}\n")
        else:
            print("❌ No direct match found. Showing available topics:")
            print(", ".join(KB.keys()))
            print("\nFor comprehensive guidance, consult docs/manual/MASTER_USER_MANUAL.md")
        return

    print("Type a question, topic (e.g., 'init', 'cursor', 'tokens', 'scaffold', 'cloudflare'), or 'quit':\n")
    while True:
        try:
            user_in = input("\033[1;36mSupport Question > \033[0m").strip()
            if not user_in:
                continue
            if user_in.lower() in ["quit", "exit", "q"]:
                print("\nThank you for using RJ Business Solutions Customer Support. Goodbye!")
                break
            
            results = search_kb(user_in)
            print()
            if results:
                for topic, ans in results:
                    print(f"\033[1;32m[Topic: {topic.upper()}]\033[0m")
                    print(f"{ans}\n")
            else:
                print("ℹ️  No exact keyword match found. Try one of:")
                print(", ".join(KB.keys()))
                print("Or open docs/manual/MASTER_USER_MANUAL.md\n")
        except (KeyboardInterrupt, EOFError):
            print("\nSession ended.")
            break

if __name__ == "__main__":
    main()
