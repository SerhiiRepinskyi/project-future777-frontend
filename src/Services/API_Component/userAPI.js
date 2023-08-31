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
        url: 'user/',
        method: 'PATCH',
        body: userData,
      }),
    }),

    themeUser: builder.mutation({
      query: (themeData) => ({
        url: 'user/theme',
        method: 'PATCH',
        body: themeData,
      }),
    }),

    avatarUser: builder.mutation({
      query: (FormData) => ({
        url: 'user/avatar',
        method: 'PATCH',
        body: FormData,
      }),
    }),

    helpUser: builder.mutation({
      query: (FormData) => ({
        url: 'user/help',
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


