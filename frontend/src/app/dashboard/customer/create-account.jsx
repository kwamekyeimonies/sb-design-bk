'use client'
import React, { useEffect } from "react";
import { Alert } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { redirect } from 'next/navigation';
import { useCreateCustomerAccountMutation, useCreateUserAccountMutation } from "@/slices/auth-slice";
import { useDispatch } from "react-redux";
import { authenticate } from "@/api/authenticationReducer";
import Cookies from "js-cookie";

const defaultTheme = createTheme();

export default function CreateCustAccount() {

    const [createNewUserAccount, { data, isError, error, isSuccess, isLoading }] = useCreateCustomerAccountMutation();

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            full_name: formData.get('fullName'),
            phone_number: formData.get('phone_number'),
            email: formData.get('email'),
            dob: formData.get('dob'),
            currency_type: formData.get('currencyType'),
            account_type: formData.get('accountType'),
            account_balance: formData.get('accountBalance'),
            initial_deposit: formData.get('initialDeposit'),

        };
        try {
            console.log(userData)
            createNewUserAccount({
                full_name: userData.full_name,
                phone_number: userData.phone_number,
                bank_branch: userData.bank_branch,
                dob: userData.dob,
                email: userData.email,
                initial_deposit: userData.initial_deposit,
                user_id: Cookies.get("id"),
                account_balance: userData.account_balance,
                account_type: userData.account_type,
                currency_type: userData.currency_type
            })

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            {
                isSuccess && (
                    <Alert severity="success">
                        Deposit Successfull
                    </Alert>
                )
            }
            {
                isError && (
                    <Alert severity="error">
                        {error?.data?.detail && error.data.detail.toString()}
                    </Alert>

                )
            }
            <Container >


                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                // className="mt-3"
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                name="fullName"
                                required
                                fullWidth
                                id="fullName"
                                label="Fullname"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="currencyType"
                                label="Currency type"
                                name="currencyType"
                                autoComplete="currencyType"
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="accountType"
                                label="Account Type"
                                name="accountType"
                                autoComplete="accountType"
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="initialDeposit"
                                label="Initial Deposit"
                                name="initialDeposit"
                                autoComplete="initialDeposit"
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="phone_number"
                                label="Phone number"
                                name="phone_number"
                                autoComplete="phone_number"
                            />
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: 5,
                            marginBottom: 5
                        }}
                    >
                        <Button
                            type="submit"
                            sx={{
                                width: '50%',
                            }}
                            style={{ background: '#0170b9', }}
                            variant="contained"
                            className="mt-3 mb-2"
                        >
                            Create Account
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: 5,
                        }}
                    >
                    </Box>
                </Box>

            </Container>
        </ThemeProvider >
    );
}
