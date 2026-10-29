import sys
import subprocess
import os

def main():
    args = sys.argv[1:]
    cmd = args[0] if args else "help"
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    
    print("\033[1;36m⚡ AGENT-FOLDERS Python CLI v2026.1\033[0m\n")
    
    if cmd in ["doctor", "validate"]:
        v_script = os.path.join(repo_root, "scripts", "validate-architecture.py")
        subprocess.run([sys.executable, v_script])
    elif cmd == "sync":
        s_script = os.path.join(repo_root, "scripts", "sync-adapters.py")
        subprocess.run([sys.executable, s_script])
    elif cmd == "scaffold":
        p_type = args[1] if len(args) > 1 else "full-stack-app"
        p_name = args[2] if len(args) > 2 else "my-app"
        sc_script = os.path.join(repo_root, "scripts", "scaffold-project.py")
        subprocess.run([sys.executable, sc_script, "--type", p_type, "--name", p_name])
    else:
        print("Usage: agent-folders [doctor|sync|scaffold <type> <name>]")

if __name__ == "__main__":
    main()
