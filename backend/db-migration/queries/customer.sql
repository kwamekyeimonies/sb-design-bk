-- name: CreateCustomer :one
INSERT INTO customer
(   id,
    full_name,
    email,
    role,
    password,
    organization,
    created_at,
    updated_at,
    is_deleted,
    deleted_at,
    phone_number,
    profile_pic,
    user_status,
    is_verified,
    api_key
)VALUES(
    $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15
)RETURNING *;