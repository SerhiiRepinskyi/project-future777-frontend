import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../API_Helper/APIHelper';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: 'users/current',
      }),
      providesTags: ['User'],
    }),

    updateUser: builder.mutation({
      query: (userData) => ({
        url: 'users/',
        method: 'PATCH',
        body: userData,
      }),
    }),

    themeUser: builder.mutation({
      query: (themeData) => ({
        url: 'users/theme',
        method: 'PATCH',
        body: themeData,
      }),
    }),

    avatarUser: builder.mutation({
      query: (FormData) => ({
        url: 'users/avatar',
        method: 'PATCH',
        body: FormData,
      }),
    }),

    helpUser: builder.mutation({
      query: (FormData) => ({
        url: 'users/help',
        method: 'POST',
        body: FormData,
      }),
    }),
  }),
});


export const {
  useGetCurrentUserQuery,
  useThemeUserMutation,
  useAvatarUserMutation,
  useHelpUserMutation,
  useUpdateUserMutation
} = userAPI;


