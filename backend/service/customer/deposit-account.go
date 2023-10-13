package customer

import (
	"context"
	"errors"
	"time"

	"github.com/google/uuid"

	"github.com/kwamekyeimonies/sb-design-bk/db-migration/db-utils"
	"github.com/kwamekyeimonies/sb-design-bk/models"
	"github.com/kwamekyeimonies/sb-design-bk/utils"
)

func (customerS *CustomerServiceImpl) DepositMoney(customerAcc *models.CustomerAccount, ctx context.Context) (*db.CustomerAccount, error) {
	dbResponse, err := customerS.pg.PostgresDbApi().DB.GetCustomerAccount(ctx, customerAcc.CustomerID)
	if err != nil {
		return nil, errors.New("Customer Account does not exist")
	}

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

	dbResp, err := customerS.pg.PostgresDbApi().DB.CreateTransactions(ctx, db.CreateTransactionsParams{
		ID:                uuid.New(),
		CustomerID:        customerAcc.CustomerID,
		UserID:            customerAcc.UserId,
		CustomerAccountID: customerAcc.CustomerID,
		Description:       customerAcc.Description,
		InitialAmount:     dbResponse.InitialDeposit,
		FinalAmount:       customerDetails.AccountBalance,
		TransactionType:   customerAcc.AccountType,
		CreatedAt:         time.Now(),
		UpdatedAt:         time.Now(),
		IsDeleted:         false,
		DeletedAt:         time.Now(),
	})

	
}
