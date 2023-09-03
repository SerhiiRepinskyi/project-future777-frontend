import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../API_Helper/APIHelper';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: baseQuery,
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: 'users/current',
      }),
      providesTags: ['User'],
    }),

    updateAvatar: builder.mutation({
      query: formData => ({
        url: 'users/avatar',
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['User'],
    }),
    updateUser: builder.mutation({
      query: updateUser => ({
        url: 'users',
        method: 'PATCH',
        body: updateUser,
      }),
      invalidatesTags: ['User'],
    }),

    themeUser: builder.mutation({
      query: themeData => ({
        url: 'users/theme',
        method: 'PATCH',
        body: themeData,
      }),
    }),

    helpUser: builder.mutation({
      query: FormData => ({
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
  useUpdateAvatarMutation,
  useHelpUserMutation,
  useUpdateUserMutation,
} = userAPI;


