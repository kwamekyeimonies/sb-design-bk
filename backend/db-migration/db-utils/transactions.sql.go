// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.20.0
// source: transactions.sql

package db

import (
	"context"
	"time"

	"github.com/google/uuid"
)

const createTransactions = `-- name: CreateTransactions :one
INSERT INTO transactions(
    id,
    customer_id,
    user_id,
    customer_account_id,
    description,
    initial_amount,
    final_amount,
    transaction_type,
    created_at,
    updated_at,
    is_deleted,
    deleted_at
)VALUES(
    $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12
)RETURNING id, customer_id, user_id, customer_account_id, description, initial_amount, final_amount, transaction_type, created_at, updated_at, is_deleted, deleted_at
`

type CreateTransactionsParams struct {
	ID                uuid.UUID `json:"id"`
	CustomerID        uuid.UUID `json:"customer_id"`
	UserID            uuid.UUID `json:"user_id"`
	CustomerAccountID uuid.UUID `json:"customer_account_id"`
	Description       string    `json:"description"`
	InitialAmount     string    `json:"initial_amount"`
	FinalAmount       string    `json:"final_amount"`
	TransactionType   string    `json:"transaction_type"`
	CreatedAt         time.Time `json:"created_at"`
	UpdatedAt         time.Time `json:"updated_at"`
	IsDeleted         bool      `json:"is_deleted"`
	DeletedAt         time.Time `json:"deleted_at"`
}

func (q *Queries) CreateTransactions(ctx context.Context, arg CreateTransactionsParams) (Transaction, error) {
	row := q.db.QueryRow(ctx, createTransactions,
		arg.ID,
		arg.CustomerID,
		arg.UserID,
		arg.CustomerAccountID,
		arg.Description,
		arg.InitialAmount,
		arg.FinalAmount,
		arg.TransactionType,
		arg.CreatedAt,
		arg.UpdatedAt,
		arg.IsDeleted,
		arg.DeletedAt,
	)
	var i Transaction
	err := row.Scan(
		&i.ID,
		&i.CustomerID,
		&i.UserID,
		&i.CustomerAccountID,
		&i.Description,
		&i.InitialAmount,
		&i.FinalAmount,
		&i.TransactionType,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.IsDeleted,
		&i.DeletedAt,
	)
	return i, err
}
