import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../API_Helper/APIHelper';

export const boardsAPI = createApi({
  reducerPath: 'boardsAPI',
  baseQuery: baseQuery,
  endpoints: builder => ({
    getBoards: builder.query({
      query: () => ({
        url: 'boards',
      }),
      providesTags: ['boards'],
    }),

    getBoardById: builder.query({
      query: id => ({
        url: `boards/${id}`,
      }),
      providesTags: ['boards'],
    }),

    addBoards: builder.mutation({
      query: boardsData => ({
        url: 'boards',
        method: 'POST',
        body: boardsData,
      }),
      invalidatesTags: ['boards'],
    }),

    deleteBoardById: builder.mutation({
      query: id => ({
        url: `boards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['boards'],
    }),

    updateBoardById: builder.mutation({
      query: (id, FormData) => ({
        url: `boards/${id}`,
        method: 'PATCH',
        body: FormData,
      }),
      providesTags: ['boards'],
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useGetBoardByIdQuery,
  useAddBoardsMutation,
  useDeleteBoardByIdMutation,
  useUpdateBoardByIdMutation,
} = boardsAPI;