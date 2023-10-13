-- name: CreateCustomerLoan :one
INSERT INTO customer_loans(
    id,
    customer_id,
    loan_amount,
    paid_amount,
    remaining_amount,
    user_id,
    created_at,
    updated_at,
    is_deleted,
    deleted_at
)VALUES(
    $1,$2,$3,$4,$5,$6,$7,$8,$9,$10
)RETURNING *;



-- name: UpdateLoanTransaction :exec
UPDATE customer_loans SET
    paid_amount = $1,
    loan_amount = $2,
    remaining_amount = $3,
    user_id = $4,
    updated_at = NOW()
WHERE customer_id = $5;
    
