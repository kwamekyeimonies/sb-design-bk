'use client'
import { authenticationSlice } from "@/slices/auth-slice";
import { configureStore } from "@reduxjs/toolkit";
// import authReducer, { authenticationSlice } from "@/app/slices/auth-slice"


const store = configureStore({
    reducer: {
        // authentication: authenticationReducer,
        [authenticationSlice.reducerPath]: authenticationSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    //     .concat(authenticationSlice.middleware)
});


export default store;