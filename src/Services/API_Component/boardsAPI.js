import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../API_Helper/APIHelper';

export const boardsAPI = createApi({
  reducerPath: 'boardsAPI',
  baseQuery: baseQuery,
  tagTypes: ['boards'],
  endpoints: builder => ({
    getBoards: builder.query({
      query: () => ({
        url: 'boards',
      }),
      providesTags: ['boards'],
    }),

    getBoardContentById: builder.query({
      query: ({id, filter}) => ({
        url: `boards/${id}/content`,
        params: { "priority": filter},
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
      query: ({ boardId, FormData }) => ({
        url: `boards/${boardId}`,
        method: 'PATCH',
        body: FormData,
      }),
      invalidatesTags: ['boards'],
    }),

    addColumn: builder.mutation({
      query: ({ boardId, title }) => ({
        url: `boards/${boardId}/columns`,
        method: 'POST',
        body: title,
      }),
      invalidatesTags: ['boards'],
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useGetBoardContentByIdQuery,
  useGetBoardByIdQuery,
  useAddBoardsMutation,
  useDeleteBoardByIdMutation,
  useUpdateBoardByIdMutation,
  useAddColumnMutation,
} = boardsAPI;
