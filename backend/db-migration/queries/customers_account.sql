-- name: CreateCustomerAccount :one
INSERT INTO customer_account(
    id,
    account_name,
    account_number,
    account_type,
    account_balance,
    initial_deposit,
    current_amount,
    customer_id,
    created_at,
    updated_at,
    is_deleted,
    deleted_at,
     currency_type,
    user_id,
    phone_number
)VALUES(
    $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15
)RETURNING *;


-- name: GetCustomerAccount :one
SELECT * FROM customer_account WHERE id = $1;

-- name: UpdateCustomerAccount :exec
UPDATE customer_account SET
    account_balance= $1,
    initial_deposit= $2,
    current_amount= $3,
    updated_at = NOW()
WHERE id = $4;
