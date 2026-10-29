#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
const command = args[0] || 'doctor';
const repoRoot = path.resolve(__dirname, '..');

console.log('\x1b[34m%s\x1b[0m', '⚡ AGENT-FOLDERS CLI v2026.1 — Universal AI Agent Architecture\n');

switch (command) {
  case 'doctor':
  case 'validate':
    console.log('Running system health validation...');
    try {
      execSync(`python3 "${path.join(repoRoot, 'scripts', 'validate-architecture.py')}"`, { stdio: 'inherit' });
      execSync(`python3 "${path.join(repoRoot, 'scripts', 'check-instruction-drift.py')}"`, { stdio: 'inherit' });
    } catch (e) {
      process.exit(1);
    }
    break;

  case 'sync':
    console.log('Synchronizing canonical policies to platform adapters...');
    try {
      execSync(`python3 "${path.join(repoRoot, 'scripts', 'sync-adapters.py')}"`, { stdio: 'inherit' });
    } catch (e) {
      process.exit(1);
    }
    break;

  case 'scaffold':
    const type = args[1] || 'full-stack-app';
    const name = args[2] || 'my-new-app';
    console.log(`Scaffolding project archetype "${type}" as "${name}"...`);
    try {
      execSync(`python3 "${path.join(repoRoot, 'scripts', 'scaffold-project.py')}" --type "${type}" --name "${name}"`, { stdio: 'inherit' });
    } catch (e) {
      process.exit(1);
    }
    break;

  case 'mcp':
    console.log('MCP Configuration:');
    console.log(fs.readFileSync(path.join(repoRoot, '.ai', 'mcp', 'mcp.config.json'), 'utf8'));
    break;

  default:
    console.log('Available commands:');
    console.log('  doctor / validate  — Run architecture integrity & token budget checks');
    console.log('  sync               — Synchronize platform adapters (CLAUDE, Cursor, Gemini)');
    console.log('  scaffold <type> <name> — Generate one of 10 project archetypes');
    console.log('  mcp                — Output active Model Context Protocol configuration');
    break;
}
