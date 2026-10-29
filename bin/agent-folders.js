#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
const command = args[0] || 'help';
const repoRoot = path.resolve(__dirname, '..');
const cwd = process.cwd();

console.log('\x1b[36m%s\x1b[0m', '⚡ AGENT-FOLDERS CLI v2026.1 — Universal AI Agent Architecture\n');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

switch (command) {
  case 'init':
    console.log(`📦 Initializing Universal AI Agent Architecture into: ${cwd}\n`);
    
    // Copy canonical .ai store
    console.log('  ▸ Copying canonical .ai/ configuration...');
    copyRecursiveSync(path.join(repoRoot, '.ai'), path.join(cwd, '.ai'));
    
    // Copy adapters
    console.log('  ▸ Copying platform adapters...');
    copyRecursiveSync(path.join(repoRoot, 'adapters'), path.join(cwd, 'adapters'));

    // Copy root instruction entrypoints
    const rootFiles = ['AGENTS.md', 'CLAUDE.md', '.cursorrules', 'GEMINI.md'];
    for (const f of rootFiles) {
      const srcFile = path.join(repoRoot, f);
      const destFile = path.join(cwd, f);
      if (fs.existsSync(srcFile) && !fs.existsSync(destFile)) {
        fs.copyFileSync(srcFile, destFile);
        console.log(`  ▸ Created ${f}`);
      }
    }

    // Ensure projects and scripts folders exist
    fs.mkdirSync(path.join(cwd, 'projects'), { recursive: true });
    fs.mkdirSync(path.join(cwd, 'scripts'), { recursive: true });
    copyRecursiveSync(path.join(repoRoot, 'scripts'), path.join(cwd, 'scripts'));

    console.log('\n\x1b[32m%s\x1b[0m', '🎉 Initialization complete!');
    console.log('\nNext steps:');
    console.log('  1. Run: npx agent-folders doctor');
    console.log('  2. Scaffold a project: npx agent-folders scaffold full-stack-app my-app');
    break;

  case 'doctor':
  case 'validate':
    console.log('🔍 Running system health & architecture validation...');
    try {
      execSync(`python3 "${path.join(repoRoot, 'scripts', 'validate-architecture.py')}"`, { stdio: 'inherit' });
      execSync(`python3 "${path.join(repoRoot, 'scripts', 'check-instruction-drift.py')}"`, { stdio: 'inherit' });
      console.log('\x1b[32m%s\x1b[0m', '\n✅ All architecture gates and drift tests passed.');
    } catch (e) {
      process.exit(1);
    }
    break;

  case 'sync':
    console.log('🔄 Synchronizing canonical policies to platform adapters...');
    try {
      execSync(`python3 "${path.join(repoRoot, 'scripts', 'sync-adapters.py')}"`, { stdio: 'inherit' });
    } catch (e) {
      process.exit(1);
    }
    break;

  case 'scaffold':
    const type = args[1] || 'full-stack-app';
    const name = args[2] || 'my-new-app';
    console.log(`🔨 Scaffolding project archetype "${type}" as "${name}"...`);
    try {
      execSync(`python3 "${path.join(repoRoot, 'scripts', 'scaffold-project.py')}" --type "${type}" --name "${name}"`, { stdio: 'inherit' });
    } catch (e) {
      process.exit(1);
    }
    break;

  case 'mcp':
    console.log('🔌 Model Context Protocol (MCP) Configuration:');
    const mcpPath = path.join(repoRoot, '.ai', 'mcp', 'mcp.config.json');
    if (fs.existsSync(mcpPath)) {
      console.log(fs.readFileSync(mcpPath, 'utf8'));
    } else {
      console.log('No active MCP configuration found at .ai/mcp/mcp.config.json');
    }
    break;

  case 'help':
  default:
    console.log('Usage: npx agent-folders <command>\n');
    console.log('Commands:');
    console.log('  init                 Initialize UANDA architecture into current directory');
    console.log('  doctor / validate    Validate repository health, links, and token budgets');
    console.log('  sync                 Synchronize canonical policies to CLAUDE, Cursor & Gemini');
    console.log('  scaffold <type> <name> Scaffold one of 10 project archetypes');
    console.log('  mcp                  Display configured Model Context Protocol tool servers');
    console.log('  help                 Display this help menu\n');
    console.log('Supported Scaffolding Archetypes:');
    console.log('  simple-website, full-stack-app, api-service, ai-agent, multi-agent-app,');
    console.log('  automation-pipeline, data-pipeline, reusable-library, research-project, repo-modernization');
    break;
}
