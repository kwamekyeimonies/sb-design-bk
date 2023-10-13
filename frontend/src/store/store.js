'use client'
import authenticationReducer from "@/api/authenticationReducer";
import { authenticationSlice } from "@/slices/auth-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        auth: authenticationReducer,
        [authenticationSlice.reducerPath]: authenticationSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(authenticationSlice.middleware)
});


export default store;