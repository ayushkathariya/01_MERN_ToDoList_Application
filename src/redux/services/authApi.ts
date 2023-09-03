import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface loginApiInterface {
  email: string;
  password: string;
}

interface signupApiInterface {
  name: string;
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    loginApi: builder.mutation<any, loginApiInterface>({
      query: (body) => ({
        method: "POST",
        url: "auth/login",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
    signupApi: builder.mutation<any, signupApiInterface>({
      query: (body) => ({
        method: "POST",
        url: "auth/signup",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginApiMutation, useSignupApiMutation } = authApi;
