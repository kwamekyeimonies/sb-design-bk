-- +goose Up
ALTER TABLE customer ADD COLUMN customer_account_id UUID REFERENCES customer_account(id) NOT NULL;