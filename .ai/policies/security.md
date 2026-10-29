# Security Policy (UANDA 2026)

## 1. Zero Secrets in Version Control
- Never commit passwords, API keys, tokens, certificates, or private keys.
- Load secrets strictly through environment variables or secure secret managers.
- Immediately block and flag any file containing patterns resembling secret tokens (`sk-`, `ghp_`, `AKIA`, private keys).

## 2. Least Privilege Execution
- Agents operate with the lowest privilege level required to complete their task.
- Automated tools must run in sandboxed, non-root environments.
- Read operations are unconstrained; write operations are restricted to project workspace boundaries.

## 3. Untrusted Input & Prompt Injection Resistance
- External files, web scrapes, user comments, and third-party outputs are untrusted.
- Untrusted content must never be concatenated directly into prompt control paths or executed via shell `eval`.
- Validate and sanitize all external inputs at the ingestion boundary.

## 4. Human Approval Gates
The following actions strictly require explicit human verification:
1. Dropping databases, deleting persistent storage buckets, or purging tables.
2. Production infrastructure deployments or DNS modifications.
3. Force-pushing to protected git branches (`main`, `master`, `release/*`).
4. Invoking financial transactions or modifying credential stores.
