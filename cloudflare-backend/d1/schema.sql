-- Cloudflare D1 Database Schema for agent-folders Leads & Follow-up Sequences

CREATE TABLE IF NOT EXISTS subscribers (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT DEFAULT 'Developer',
    tier TEXT DEFAULT 'free', -- free, pro, agency, enterprise
    status TEXT DEFAULT 'active', -- active, unsubscribed, converted
    current_step INTEGER DEFAULT 1, -- 1 to 5
    next_send_at INTEGER NOT NULL, -- Unix timestamp in seconds
    last_sent_at INTEGER,
    created_at INTEGER NOT NULL,
    source TEXT DEFAULT 'landing_page'
);

CREATE INDEX IF NOT EXISTS idx_subscribers_next_send ON subscribers(status, next_send_at);
CREATE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);

CREATE TABLE IF NOT EXISTS email_logs (
    id TEXT PRIMARY KEY,
    subscriber_id TEXT NOT NULL,
    email TEXT NOT NULL,
    step INTEGER NOT NULL,
    subject TEXT NOT NULL,
    status TEXT NOT NULL, -- sent, failed
    sent_at INTEGER NOT NULL,
    error_message TEXT,
    FOREIGN KEY(subscriber_id) REFERENCES subscribers(id)
);

CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    subscriber_id TEXT,
    email TEXT NOT NULL,
    tier TEXT NOT NULL, -- pro, agency, enterprise
    amount INTEGER NOT NULL, -- in cents: 9700, 49700
    payment_method TEXT DEFAULT 'stripe', -- stripe, zelle, wire
    created_at INTEGER NOT NULL
);
