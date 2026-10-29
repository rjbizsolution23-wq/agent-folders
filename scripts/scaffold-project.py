#!/usr/bin/env python3
import os
import sys
import argparse

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

ARCHETYPES = {
    "simple-website": ["index.html", "style.css", "app.js", "README.md"],
    "full-stack-app": ["src/index.ts", "src/server.ts", "tests/app.test.ts", "config/default.json", "README.md"],
    "api-service": ["src/routes.ts", "src/controller.ts", "src/middleware.ts", "tests/api.test.ts", "README.md"],
    "ai-agent": ["agent/core.py", "agent/tools.py", "agent/prompts.py", "tests/test_agent.py", "README.md"],
    "multi-agent-app": ["orchestrator.py", "agents/worker.py", "protocols/schema.py", "README.md"],
    "automation-pipeline": ["pipeline.py", "tasks/fetch.py", "tasks/process.py", "README.md"],
    "data-pipeline": ["etl/extract.py", "etl/transform.py", "etl/load.py", "tests/test_etl.py", "README.md"],
    "reusable-library": ["src/index.ts", "tests/index.test.ts", "README.md", "package.json"],
    "research-project": ["notebooks/analysis.ipynb", "data/raw/.gitkeep", "src/model.py", "README.md"],
    "repo-modernization": ["migration-plan.md", "shims/legacy.ts", "README.md"]
}

def scaffold(project_type, project_name):
    if project_type not in ARCHETYPES:
        print(f"❌ Unknown project type: {project_type}")
        print(f"Available types: {', '.join(ARCHETYPES.keys())}")
        sys.exit(1)
        
    target_dir = os.path.join(REPO_ROOT, "projects", project_name)
    if os.path.exists(target_dir):
        print(f"❌ Project directory already exists: projects/{project_name}")
        sys.exit(1)
        
    os.makedirs(target_dir, exist_ok=True)
    files = ARCHETYPES[project_type]
    for rel in files:
        fp = os.path.join(target_dir, rel)
        os.makedirs(os.path.dirname(fp), exist_ok=True)
        with open(fp, "w", encoding="utf-8") as f:
            f.write(f"# {project_name} — {rel}\n# Scaffolding generated for archetype: {project_type}\n")
            
    # Add project-specific README referencing canonical policies
    readme_path = os.path.join(target_dir, "README.md")
    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(f"""# {project_name}

Archetype: `{project_type}`

## AI Agent Operating Instructions
When working on this project, follow the workspace-level rules in `../../AGENTS.md` and:
- Engineering policy: `../../.ai/policies/engineering.md`
- Security policy: `../../.ai/policies/security.md`
- Testing policy: `../../.ai/policies/testing.md`

## Verification
Run tests for this project from repository root.
""")
    print(f"🎉 Successfully scaffolded '{project_name}' ({project_type}) in projects/{project_name}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="UANDA Project Scaffolder")
    parser.add_argument("--type", required=True, choices=list(ARCHETYPES.keys()), help="Project archetype")
    parser.add_argument("--name", required=True, help="Project name")
    args = parser.parse_args()
    scaffold(args.type, args.name)
