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
import { useLoanCustomerAmountMutation } from "@/slices/auth-slice";
import { useDispatch } from "react-redux";
import { authenticate } from "@/api/authenticationReducer";
import Cookies from "js-cookie";

const defaultTheme = createTheme();

export default function LoanCustomer() {

    const [createNewUserAccount, { data, isError, error, isSuccess, isLoading }] = useLoanCustomerAmountMutation();

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const userData = {
            customer_id: formData.get('accountNumber'),
            loan_amount: formData.get('loanAmount'),
            amountPaid: formData.get("paidAmount"),
            user_id: Cookies.get("id"),
        };
        try {
            console.log(userData)
            createNewUserAccount({
                customer_id: userData.customer_id,
                loan_amount: userData.loan_amount,
                paid_amount: userData.paid_ammount,
                user_id: Cookies.get("id"),
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
                                name="accountNumber"
                                required
                                fullWidth
                                id="accountNumber"
                                label="Account Number"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="loanAmount"
                                label="Loan Amount"
                                name="loanAmount"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="paidAmount"
                                label="Amount Paid"
                                name="paidAmount"
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
                            Create Loan
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
