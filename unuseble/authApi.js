// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://project-future777-backend.onrender.com/api/',
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token;
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery,
//   endpoints: builder => ({
//     register: builder.mutation({
//       query: credentials => ({
//         url: 'auth/register',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     logIn: builder.mutation({
//       query: credentials => ({
//         url: 'auth/login',
//         method: 'POST',
//         body: credentials,
//       }),
//       providesTags: ['User'],
//     }),
//     logOut: builder.mutation({
//       query: () => ({
//         url: 'auth/logout',
//         method: 'POST',
//       }),
//       invalidatesTags: ['User'],
//     }),
//     getCurrentUser: builder.query({
//       query: () => 'users/current',
//       providesTags: ['User'],
//     }),
//   }),
// });

// export const { useRegisterMutation, useLogInMutation, useLogOutMutation, useGetCurrentUserQuery } =
//   authApi;
