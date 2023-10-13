import { apiSlice } from "@/api/api-slice";
import build from "next/dist/build";

export const authenticationSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createUserAccount: builder.mutation({
            query: ({ email }) => ({
                url: "/user",
                method: "POST",
                body: {
                    email: email,
                }
            })
        }),
        loginUser: build.mutation({
            query: ({ email, password }) => ({
                url: "/login",
                method: "POST",
                body: {
                    email: email,
                    password: password
                },
            })
        })
    })
})


export const {
    useCreateUserAccountMutation,
    useLoginUserMutation,
} = authenticationSlice;