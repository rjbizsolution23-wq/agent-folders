# Model Context Protocol (MCP) Hub

This directory configures unified tool access across **Claude Code**, **Cursor**, **Codex**, and autonomous agent runners.

### Configured MCP Servers
1. **`filesystem`**: Sandboxed read/write access scoped strictly to `projects/`, `packages/`, and `docs/`.
2. **`cloudflare`**: Instant deployment to Cloudflare Workers, KV, D1, and R2.
3. **`github`**: Automated PR creation, issue triaging, and branch management.
4. **`sqlite-memory`**: High-performance bi-temporal project memory store.
5. **`puppeteer-browser`**: Headless browser automation for UI verification and scraping.

### Usage
- For Claude Code: Reference `.ai/mcp/mcp.config.json` in your local Claude configuration.
- For Cursor: Enable MCP in Cursor Settings > Features > MCP, passing `.ai/mcp/mcp.config.json`.
