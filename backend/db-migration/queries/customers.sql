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
    phone_number
)VALUES(
    $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13
)RETURNING *;
