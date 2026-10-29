#!/usr/bin/env bash
set -e

REPO="rjbizsolution23-wq/agent-folders"
BRANCH="main"
TARBALL_URL="https://github.com/$REPO/archive/refs/heads/$BRANCH.tar.gz"

echo -e "\033[1;34m⚡ Installing Universal AI Agent Architecture (agent-folders)...\033[0m"

TARGET_DIR="${1:-$(pwd)}"
TMP_DIR=$(mktemp -d)

echo "📥 Downloading latest agent-folders release from GitHub..."
curl -fsSL "$TARBALL_URL" -o "$TMP_DIR/agent-folders.tar.gz"

echo "📦 Extracting files into $TARGET_DIR..."
tar -xzf "$TMP_DIR/agent-folders.tar.gz" -C "$TMP_DIR"
cp -Rn "$TMP_DIR/agent-folders-$BRANCH/"* "$TARGET_DIR/" || true
cp -Rn "$TMP_DIR/agent-folders-$BRANCH/".* "$TARGET_DIR/" 2>/dev/null || true

rm -rf "$TMP_DIR"

echo -e "\033[1;32m✅ Successfully installed agent-folders in $TARGET_DIR!\033[0m"
echo ""
echo "Next steps:"
echo "  1. Run architecture check:  python3 scripts/validate-architecture.py"
echo "  2. Scaffold a new project:  python3 scripts/scaffold-project.py --type full-stack-app --name my-app"
echo "  3. Sync adapters:           python3 scripts/sync-adapters.py"
