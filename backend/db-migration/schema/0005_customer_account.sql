-- +goose Up
CREATE TABLE customer_account(
    id UUID PRIMARY KEY,
    account_name TEXT NOT NULL,
    account_number TEXT NOT NULL,
    account_type TEXT NOT NULL,
    account_balance TEXT NOT NULL DEFAULT '',
    initial_deposit TEXT NOT NULL DEFAULT '',
    current_amount TEXT NOT NULL DEFAULT '',
    customer_id UUID REFERENCES customer(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    is_deleted BOOLEAN NOT NULL DEFAULT False,
    deleted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    phone_number TEXT NOT NULL UNIQUE DEFAULT ''
);

-- +goose Down
DROP TABLE customer_account;