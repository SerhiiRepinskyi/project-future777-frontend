import { createApi} from '@reduxjs/toolkit/query/react';
import  baseQuery from '../API_Helper/APIHelper';


// const token = selectToken();
// const baseQuery = createBaseQueryWithToken(token);
// console.log(token);


export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        register: builder.mutation({
            query: credentials => ({
                url: "auth/register",
                method: "POST",
                body: credentials,
                skipToken: true,
            })
        }),
        loginGoogleUser: builder.mutation({
            query: credentials => ({
                url: "auth/google",
                method: "POST",
                body: credentials,
                skipToken: true,
            })
        }),


        logIn: builder.mutation({
            query: credentials => ({
                url: "auth/login",
                method: "POST",
                body: credentials,
               
            }),
            providesTags: ['User'],
        }),

    
        logOut: builder.mutation({
            query: () => ({
                url: "auth/logout",
                method: "POST",
                
            }),
            invalidatesTags: ['User'],
        }),
    })
});

export const {
  useRegisterMutation,
  useLogInMutation,
  useLogOutMutation,
  useLoginGoogleUserMutation
} = authAPI;

export default authAPI;