import { apiSlice } from "@/api/api-slice";

export const authenticationSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createUserAccount: builder.mutation({
            query: ({ full_name, password, phone_number, dob, bank_branch, email }) => ({
                url: "/users/signup",
                method: "POST",
                body: {
                    email,
                    full_name,
                    phone_number,
                    dob,
                    bank_branch,
                    password
                }
            })
        }),
        loginUser: builder.mutation({
            query: ({ email, password }) => ({
                url: "/users/login",
                method: "POST",
                body: {
                    email: email,
                    password: password
                },
            })
        }),
        getCustomerAccount: builder.mutation({
            query: ({ customerAccountNumber }) => ({
                url: "/customer/account",
                method: "POST",
                body: {
                    customer_id: customerAccountNumber,
                }
            })
        }),
        createCustomerAccount: builder.mutation({
            query: ({ full_name, email,
                currency_type,
                account_type,
                account_balance,
                initial_deposit,
                phone_number,
                user_id, }) => ({
                    url: "/customer/create",
                    method: "POST",
                    body: {
                        full_name,
                        email,
                        currency_type,
                        account_type,
                        account_balance,
                        initial_deposit,
                        phone_number,
                        user_id,
                    }
                })
        }),
        createCustomerDeposit: builder.mutation({
            query: ({ deposit_amount,
                customer_id,
                user_id }) => ({
                    url: "/customer/deposit",
                    method: "POST",
                    body: {
                        deposit_amount,
                        customer_id,
                        user_id,
                    }
                })
        }),
        withdrawCustomerAmount: builder.mutation({
            query: ({ deposit_amount,
                customer_id,
                user_id }) => ({
                    url: "/customer/withdraw",
                    method: "POST",
                    body: {
                        deposit_amount,
                        customer_id,
                        user_id,
                    }
                })
        }),
        loanCustomerAmount: builder.mutation({
            query: ({
                customer_id,
                loan_amount,
                paid_amount,
                user_id,
            }) => ({
                url: "/customer/loan",
                method: "POST",
                body: {
                    customer_id, loan_amount, paid_amount, user_id
                }
            })

        })

    })
})


export const {
    useCreateUserAccountMutation,
    useLoginUserMutation,
    useGetCustomerAccountMutation,
    useCreateCustomerAccountMutation,
    useCreateCustomerDepositMutation,
    useWithdrawCustomerAmountMutation,
    useLoanCustomerAmountMutation
} = authenticationSlice;