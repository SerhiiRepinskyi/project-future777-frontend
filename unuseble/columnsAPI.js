import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../src/Services/API_Helper/APIHelper';

export const columnsAPI = createApi({
  reducerPath: 'columnsAPI',
  baseQuery: baseQuery,
  tagTypes: ['columns'],
  endpoints: builder => ({
    // addColumn: builder.mutation({
    //   query: ({ boardId, title }) => ({
    //     url: `boards/${boardId}/columns`,
    //     method: 'POST',
    //     body: title,
    //   }),
    //   invalidatesTags: ['columns'],
    // }),
  }),
});

