import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://project-future777-backend.onrender.com/api/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseQuery}),
  endpoints: (builder) => ({
    redisterUser: builder.mutation({
      query: (name, email, password) => ({
        url: "auth/register",
        method: "POST",
        body: {
          name: name,
          email: email,
          password: password
        },
        skipToken:true,
      })
    }),
  
        loginUser: builder.mutation({
            query:( email, password) => ({
                url: "auth/login",
                method: "POST",
                body: {
                    email: email,
                    password: password
                },    
          })
        }),

        logoutUser:builder.mutation({
            query:(token) => ({
                url: "auth/logout",
                method: "POST",
            headers: {
              authorization: token
            }
          })
        }),

      currentUser: builder.query({
        query: (token) => ({
          url: "user/current",
          headers: {
              authorization: token
            }
          })
      }),

      themeUser:builder.mutation({
            query:(theme, token) => ({
                url: "user/theme",
                method: "PATCH",
            headers: {
              authorization: token
          },
            body: {
              theme : theme,
            }
          })
        }),
      

    

  }),
});

export const { } = api;
