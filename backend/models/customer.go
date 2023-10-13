package models

import (
	"time"

	"github.com/google/uuid"
)

type Customer struct {
	ID             uuid.UUID `json:"id"`
	FullName       string    `json:"full_name"`
	Email          string    `json:"email"`
	Role           string    `json:"role"`
	Password       string    `json:"password"`
	Organization   string    `json:"organization"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
	AccountName    string    `json:"account_name"`
	AccountNumber  string    `json:"account_number"`
	AccountType    string    `json:"account_type"`
	AccountBalance string    `json:"account_balance"`
	CurrencyType   string    `json:"currency_type"`
	InitialDeposit string    `json:"initial_deposit"`
	CurrentAmount  string    `json:"current_amount"`
	CustomerID     uuid.UUID `json:"customer_id"`
	UserId         uuid.UUID `json:"user_id"`
	IsDeleted      bool      `json:"is_deleted"`
	DeletedAt      time.Time `json:"deleted_at"`
	PhoneNumber    string    `json:"phone_number"`
	ProfilePic     string    `json:"profile_pic"`
	UserStatus     bool      `json:"user_status"`
	IsVerified     bool      `json:"is_verified"`
	ApiKey         string    `json:"api_key"`
}
