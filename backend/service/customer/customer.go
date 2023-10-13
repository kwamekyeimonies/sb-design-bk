package customer

import (
	"context"

	"github.com/kwamekyeimonies/sb-design-bk/db-migration/db-utils"
	"github.com/kwamekyeimonies/sb-design-bk/dbapi"
	"github.com/kwamekyeimonies/sb-design-bk/models"
)

type CustomerRespository interface {
	CreateAccount(customer *models.Customer, ctx context.Context) (*db.Customer, *db.CustomerAccount, *string, error)
	LoanMoneyToCustomer(customerAcc *models.CustomerLoans, ctx context.Context) (*string, error)
	DepositMoney(customerAcc *models.CustomerAccount, ctx context.Context) (*string, error)
	WithdrawMoney(customerAcc *models.CustomerAccount, ctx context.Context) (*string, error)
	GetCustomerAccountDetails(customer *models.Customer, ctx context.Context) (*db.CustomerAccount, error)
}

type CustomerServiceImpl struct {
	pg  *dbapi.NewPgApiConfig
	ctx context.Context
}

func NewCustomerRespositoryImpl(pg *dbapi.NewPgApiConfig, ctx context.Context) CustomerRespository {
	return &CustomerServiceImpl{
		pg:  pg,
		ctx: ctx,
	}
}
