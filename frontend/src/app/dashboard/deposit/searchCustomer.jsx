'use client'
import React, { useEffect, useState } from 'react';
import { TextField, Button, Alert } from '@mui/material';
import { useGetCustomerAccountMutation } from '@/slices/auth-slice';

const SearchCustomer = () => {

    const [searchCustomer, { data, error, isError, isLoading, isSuccess }] = useGetCustomerAccountMutation();

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        searchCustomer({
            customerAccountNumber: searchTerm
        })
    };

    useEffect(() => {
        if (isSuccess) {
            console.log(data?.response)
        }
    }, [isSuccess])

    return (
        <div>
            <div style={{
                marginBottom: '20px',
                marginTop: '20px',
                width: '500px'
            }}>
                <TextField
                    label="Search"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={handleInputChange}
                    style={{ marginRight: '10px' }}
                />
                <Button variant="contained" color="primary" onClick={handleSearch} style={{ background: '#0170b9', marginTop: '10px' }}>
                    Search
                </Button>
            </div>

            <div style={{ marginBottom: '30px', justifyContent: 'center', alignItems: "center" }}>

                {
                    isSuccess && (
                        <div>
                            <Alert>
                                <h5>Account Exist</h5>
                            </Alert>
                            <div>
                                <h1>Account Details</h1>
                                <p>Account Number: {data?.response?.account_number}</p>
                                <p>Account Name: {data?.response?.account_name}</p>
                                <p>Account Type: {data?.response?.account_type}</p>
                                <p>Currency Type: {data?.response?.currency_type}</p>
                                <p>Initial Deposit: {data?.response?.initial_deposit}</p>
                                <p>Current Amount: {data?.response?.current_amount}</p>
                            </div>
                        </div>
                    )

                }

            </div>
        </div>
    )
}

export default SearchCustomer