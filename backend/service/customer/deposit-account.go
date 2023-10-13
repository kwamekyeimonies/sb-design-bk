package customer

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/google/uuid"

	"github.com/kwamekyeimonies/sb-design-bk/db-migration/db-utils"
	"github.com/kwamekyeimonies/sb-design-bk/models"
	"github.com/kwamekyeimonies/sb-design-bk/utils"
)

func (customerS *CustomerServiceImpl) DepositMoney(customerAcc *models.CustomerAccount, ctx context.Context) (*string, error) {
	dbResponse, err := customerS.pg.PostgresDbApi().DB.GetCustomerAccount(ctx, customerAcc.CustomerID)
	if err != nil {
		return nil, errors.New("Customer Account does not exist")
	}

	fmt.Println(dbResponse.CurrentAmount)

	customerDetails := dbResponse
	depositAmount, err := utils.ConvertToDouble(customerAcc.DepsitAmount)
	if err != nil {
		return nil, err
	}
	currentAmount, err := utils.ConvertToDouble(dbResponse.CurrentAmount)
	if err != nil {
		return nil, err
	}
	AccountBalance := depositAmount + currentAmount

	customerDetails.AccountBalance = utils.ConvertToString(AccountBalance)

	updateErr := customerS.pg.PostgresDbApi().DB.UpdateCustomerAccount(ctx, db.UpdateCustomerAccountParams{
		AccountBalance: customerDetails.AccountBalance,
		InitialDeposit: dbResponse.InitialDeposit,
		CurrentAmount:  customerDetails.AccountBalance,
		ID:             customerAcc.CustomerID,
	})
	if err != nil {
		return nil, updateErr
	}

	_, err = customerS.pg.PostgresDbApi().DB.CreateTransactions(ctx, db.CreateTransactionsParams{
		ID:                uuid.New(),
		CustomerID:        customerAcc.CustomerID,
		UserID:            customerAcc.UserId,
		CustomerAccountID: customerAcc.CustomerID,
		Description:       "Deposit",
		InitialAmount:     dbResponse.InitialDeposit,
		FinalAmount:       customerDetails.AccountBalance,
		TransactionType:   dbResponse.AccountType,
		CreatedAt:         time.Now(),
		UpdatedAt:         time.Now(),
		IsDeleted:         false,
		DeletedAt:         time.Now(),
	})
	if err != nil {
		return nil, err
	}

	_, err = customerS.pg.PostgresDbApi().DB.CreateCustomerLogs(ctx, db.CreateCustomerLogsParams{
		ID:                uuid.New(),
		CustomerID:        customerAcc.CustomerID,
		UserID:            customerAcc.UserId,
		CustomerAccountID: customerAcc.CustomerID,
		TransactionType:   dbResponse.AccountType,
		CreatedAt:         time.Now(),
		UpdatedAt:         time.Now(),
		IsDeleted:         false,
		DeletedAt:         time.Now(),
	})
	if err != nil {
		return nil, err
	}

	msg := "Deposition successfull"

	return &msg, nil
}
