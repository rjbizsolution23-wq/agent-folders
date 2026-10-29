#!/usr/bin/env bash
set -e

echo -e "\033[1;34m⚡ Deploying agent-folders Email & Follow-up Engine to Cloudflare...\033[0m"

cd "$(dirname "$0")/.."

if ! command -v wrangler &> /dev/null; then
    echo "❌ wrangler CLI not found. Run: npm install -g wrangler"
    exit 1
fi

echo "1. Checking Cloudflare D1 Database..."
# Check or create D1 database
if wrangler d1 list | grep -q "agent_folders_db"; then
    echo "✅ Database 'agent_folders_db' exists."
else
    echo "Creating database 'agent_folders_db'..."
    wrangler d1 create agent_folders_db
fi

echo "2. Applying D1 schema migrations..."
wrangler d1 execute agent_folders_db --file=./d1/schema.sql --yes || true

echo "3. Deploying Cloudflare Worker..."
wrangler deploy

echo -e "\033[1;32m🎉 Successfully deployed agent-folders Email & Follow-up Engine to Cloudflare!\033[0m"
