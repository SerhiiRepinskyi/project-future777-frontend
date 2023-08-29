import { createApi} from '@reduxjs/toolkit/query/react';
import  baseQuery from '../API_Helper/APIHelper';


// const token = selectToken();
// const baseQuery = createBaseQueryWithToken(token);
// console.log(token);


export const authAPI = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: credentials => ({
                url: "auth/register",
                method: "POST",
                body: credentials,
                skipToken: true,
            })
        }),
  
    
        loginUser: builder.mutation({
            query: credentials => ({
                url: "auth/login",
                method: "POST",
                body: credentials,
                providesTags: ['User'],
            })
        }),

    
        logoutUser: builder.mutation({
            query: () => ({
                url: "auth/logout",
                method: "POST",
                invalidatesTags: ['User'],
            })
        }),
    })
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation
} = authAPI;