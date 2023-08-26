// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://project-future777-backend.onrender.com/',
//   credentials: 'include',
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
//         url: 'api/auth/register',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//       logIn: builder.mutation({
//           query: credentials => ({
//               url: "api/auth/login",
//               method: "POST",
//               body: credentials,
//         }), providesTags: ["User"]
//     })  
//   }),
// });

// export const { useRegisterMutation, useLogInMutation } = authApi;
