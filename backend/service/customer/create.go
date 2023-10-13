package customer

import (
	"context"
	"time"

	"github.com/google/uuid"

	"github.com/kwamekyeimonies/sb-design-bk/db-migration/db-utils"
	"github.com/kwamekyeimonies/sb-design-bk/models"
)

func (customerS *CustomerServiceImpl) CreateAccount(customer *models.Customer, ctx context.Context) (*db.Customer, *db.CustomerAccount, *string, error) {
	dbResponse, err := customerS.pg.PostgresDbApi().DB.CreateCustomer(ctx, db.CreateCustomerParams{
		ID:           uuid.New(),
		FullName:     customer.FullName,
		Email:        customer.Email,
		Role:         "customer",
		Password:     "demo",
		Organization: "Bank",
		CreatedAt:    time.Now(),
		UpdatedAt:    time.Now(),
		IsDeleted:    false,
		DeletedAt:    time.Now(),
		PhoneNumber:  customer.PhoneNumber,
		ProfilePic:   customer.ProfilePic,
		UserStatus:   false,
		IsVerified:   false,
	})

	if err != nil {
		return nil, nil, nil, err
	}

	accountResponse, err := customerS.pg.PostgresDbApi().DB.CreateCustomerAccount(ctx, db.CreateCustomerAccountParams{
		ID:             dbResponse.ID,
		AccountName:    dbResponse.FullName,
		AccountNumber:  dbResponse.ID.String(),
		AccountType:    customer.AccountType,
		CurrencyType:   customer.CurrencyType,
		AccountBalance: customer.AccountBalance,
		InitialDeposit: customer.InitialDeposit,
		CurrentAmount:  customer.CurrentAmount,
		CustomerID:     dbResponse.ID,
		UserID:         customer.UserId,
		CreatedAt:      time.Now(),
		UpdatedAt:      time.Now(),
		IsDeleted:      false,
		DeletedAt:      time.Now(),
		PhoneNumber:    customer.PhoneNumber,
	})

	if err != nil {
		return nil, nil, nil, err
	}

	msg := "Customer account created successfully"

	return &dbResponse, &accountResponse, &msg, nil

}
