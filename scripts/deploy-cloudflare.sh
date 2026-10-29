#!/usr/bin/env bash
set -e

echo "🚀 Deploying agent-folders edge gateway to Cloudflare Workers..."

if ! command -v wrangler &> /dev/null; then
    echo "❌ wrangler CLI not found. Install via: npm install -g wrangler"
    exit 1
fi

PROJECT_NAME=${1:-"example-app"}
PROJECT_DIR="projects/$PROJECT_NAME"

if [ ! -d "$PROJECT_DIR" ]; then
    echo "❌ Project directory not found: $PROJECT_DIR"
    exit 1
fi

echo "📦 Packaging and deploying $PROJECT_NAME..."
cd "$PROJECT_DIR"
if [ -f "wrangler.toml" ]; then
    wrangler deploy
else
    echo "ℹ️  Generating baseline wrangler.toml..."
    cat << 'TOML' > wrangler.toml
name = "agent-edge-worker"
main = "src/index.ts"
compatibility_date = "2026-10-28"
compatibility_flags = ["nodejs_compat"]

[observability]
enabled = true
TOML
    wrangler deploy
fi

echo "✅ Deployment completed successfully on Cloudflare edge network!"
