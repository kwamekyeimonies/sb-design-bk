// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.20.0

package db

import (
	"time"

	"github.com/google/uuid"
)

type Customer struct {
	ID           uuid.UUID `json:"id"`
	FullName     string    `json:"full_name"`
	Email        string    `json:"email"`
	Role         string    `json:"role"`
	Password     string    `json:"password"`
	Organization string    `json:"organization"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
	IsDeleted    bool      `json:"is_deleted"`
	DeletedAt    time.Time `json:"deleted_at"`
	PhoneNumber  string    `json:"phone_number"`
	ProfilePic   string    `json:"profile_pic"`
	UserStatus   bool      `json:"user_status"`
	IsVerified   bool      `json:"is_verified"`
	ApiKey       string    `json:"api_key"`
}

type CustomerAccount struct {
	ID             uuid.UUID `json:"id"`
	AccountName    string    `json:"account_name"`
	AccountNumber  string    `json:"account_number"`
	AccountType    string    `json:"account_type"`
	CurrencyType   string    `json:"currency_type"`
	AccountBalance string    `json:"account_balance"`
	InitialDeposit string    `json:"initial_deposit"`
	CurrentAmount  string    `json:"current_amount"`
	CustomerID     uuid.UUID `json:"customer_id"`
	UserID         uuid.UUID `json:"user_id"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`
	IsDeleted      bool      `json:"is_deleted"`
	DeletedAt      time.Time `json:"deleted_at"`
	PhoneNumber    string    `json:"phone_number"`
}

type CustomerLoan struct {
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

type CustomerLog struct {
	ID                uuid.UUID `json:"id"`
	CustomerID        uuid.UUID `json:"customer_id"`
	UserID            uuid.UUID `json:"user_id"`
	CustomerAccountID uuid.UUID `json:"customer_account_id"`
	TransactionType   string    `json:"transaction_type"`
	CreatedAt         time.Time `json:"created_at"`
	UpdatedAt         time.Time `json:"updated_at"`
	IsDeleted         bool      `json:"is_deleted"`
	DeletedAt         time.Time `json:"deleted_at"`
}

type CustomerNotification struct {
	ID                uuid.UUID `json:"id"`
	CustomerID        uuid.UUID `json:"customer_id"`
	UserID            uuid.UUID `json:"user_id"`
	CustomerAccountID uuid.UUID `json:"customer_account_id"`
	TransactionType   string    `json:"transaction_type"`
	Message           string    `json:"message"`
	Amount            string    `json:"amount"`
	CurrentAmount     string    `json:"current_amount"`
	CreatedAt         time.Time `json:"created_at"`
	UpdatedAt         time.Time `json:"updated_at"`
	IsDeleted         bool      `json:"is_deleted"`
	DeletedAt         time.Time `json:"deleted_at"`
}

type Otp struct {
	ID          uuid.UUID `json:"id"`
	UserID      uuid.UUID `json:"user_id"`
	Secret      string    `json:"secret"`
	IsVerified  bool      `json:"is_verified"`
	ExpiryTime  time.Time `json:"expiry_time"`
	VerfiedDate time.Time `json:"verfied_date"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

type Transaction struct {
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

type User struct {
	ID          uuid.UUID `json:"id"`
	FullName    string    `json:"full_name"`
	Email       string    `json:"email"`
	Role        string    `json:"role"`
	Password    string    `json:"password"`
	BankBranch  string    `json:"bank_branch"`
	Dob         string    `json:"dob"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
	IsDeleted   bool      `json:"is_deleted"`
	DeletedAt   time.Time `json:"deleted_at"`
	PhoneNumber string    `json:"phone_number"`
	ProfilePic  string    `json:"profile_pic"`
	UserStatus  bool      `json:"user_status"`
	IsVerified  bool      `json:"is_verified"`
	ApiKey      string    `json:"api_key"`
}

type UsersLog struct {
	ID                 uuid.UUID `json:"id"`
	CustomerID         uuid.UUID `json:"customer_id"`
	UserID             uuid.UUID `json:"user_id"`
	CustomerAccountID  uuid.UUID `json:"customer_account_id"`
	TransactionType    string    `json:"transaction_type"`
	TransactionPurpose string    `json:"transaction_purpose"`
	CreatedAt          time.Time `json:"created_at"`
	UpdatedAt          time.Time `json:"updated_at"`
	IsDeleted          bool      `json:"is_deleted"`
	DeletedAt          time.Time `json:"deleted_at"`
}
