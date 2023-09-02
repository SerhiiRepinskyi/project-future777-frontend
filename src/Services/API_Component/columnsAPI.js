import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../API_Helper/APIHelper';

export const columnsAPI = createApi({
  reducerPath: 'columnsAPI',
  baseQuery: baseQuery,
  tagTypes: ['columns'],
  endpoints: builder => ({

    addColumn: builder.mutation({
      query: ({ boardId, title }) => ({
        url: `boards/${boardId}/columns`,
        method: 'POST',
        body: title,
      }),
      invalidatesTags: ['columns'],
    }),

    updateColumnById: builder.mutation({
      query: ({ columnId, title }) => ({
        url: `/columns/:${columnId}`,
        method: 'PATCH',
        body: title,
      }),
      invalidatesTags: ['columns'],
    }),

    deleteColumnById: builder.mutation({
      query: columnId => ({
        url: `/columns/:${columnId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['columns'],
    }),
  }),
});

export const {
  useAddColumnMutation,
  useUpdateColumnByIdMutation,
  useDeleteColumnByIdMutation,
} = columnsAPI;
