package models

import (
	"time"

	"github.com/google/uuid"
)

type CustomerLoans struct {
	ID              uuid.UUID `json:"id"`
	CustomerID      uuid.UUID `json:"customer_id"`
	LoanAmount      string    `json:"loan_amount"`
	PaidAmount      string    `json:"paid_amount"`
	RemainingAmount string    `json:"remaining_amount"`
	UserID          uuid.UUID `json:"user_id"`
	CreatedAt       time.Time `json:"created_at"`
	UpdatedAt       time.Time `json:"updated_at"`
	IsDeleted       bool      `json:"is_deleted"`
	DeletedAt       time.Time `json:"deleted_at"`
}
