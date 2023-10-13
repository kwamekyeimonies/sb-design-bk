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
import { useCreateUserAccountMutation } from "@/slices/auth-slice";
import { useDispatch } from "react-redux";
import { authenticate } from "@/api/authenticationReducer";

const defaultTheme = createTheme();

export default function SignUp() {

    const [createNewUserAccount, { data, isError, error, isSuccess, isLoading }] = useCreateUserAccountMutation();

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
            full_name: formData.get('fullName'),
            phone_number: formData.get('phone_number'),
            bank_branch: formData.get('bank_branch'),
            dob: formData.get('dob'),
            email: formData.get('email'),
            password: formData.get('password'),
        };
        try {
            console.log(userData)
            createNewUserAccount({
                full_name: userData.full_name,
                phone_number: userData.phone_number,
                bank_branch: userData.bank_branch,
                dob: userData.dob,
                email: userData.email,
                password: userData.password,
            })
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(authenticate({ userid: data?.response.id }))
            redirect("/auth/signin")
        }
    }, [isSuccess, data, dispatch])


    return (
        <ThemeProvider theme={defaultTheme}>
            {
                isSuccess && (
                    <Alert severity="success">
                        Sign-up successful!
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
            <Container component="main" maxWidth="xs">
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginBottom: -2
                    }}
                    component="h5"
                    variant="h5"
                    align="center"
                    gutterBottom={true}>
                    Monitoring & Evaluation
                </Typography>
                <CssBaseline />
                <Box
                    className="mt-26 flex flex-col items-center"
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                    </div>
                    <Typography
                        sx={{
                            fontWeight: 'bold',
                            marginTop: 5,
                            marginBottom: 5
                        }}
                        component="h5"
                        variant="h5"
                        align="center"
                        gutterBottom={true}>
                        Sign-Up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        className="mt-3"
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="fullName"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="Full name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="bank_branch"
                                    label="Bank Branch"
                                    name="bank_branch"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
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

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="dob"
                                    label="Date of Birth"
                                    name="dob"
                                    autoComplete="dob"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
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
                                Sign Up
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
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Link href="./signin" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
