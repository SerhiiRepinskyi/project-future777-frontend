import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../API_Helper/APIHelper';

export const boardsAPI = createApi({
  reducerPath: 'boardsAPI',
  baseQuery: baseQuery,
  tagTypes: ['boards', 'columns', 'cards'],
  endpoints: builder => ({
    getBoards: builder.query({
      query: () => ({
        url: 'boards',
      }),
      providesTags: ['boards'],
    }),

    getBoardContentById: builder.query({
      query: ({ id, filter }) => ({
        url: `boards/${id}/content`,
        params: { priority: filter },
      }),
      providesTags: ['boards', 'cards'],
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

    updateColumnById: builder.mutation({
      query: ({ columnId, title }) => ({
        url: `/columns/${columnId}`,
        method: 'PATCH',
        body: title,
      }),
      invalidatesTags: ['boards'],
    }),

    deleteColumnById: builder.mutation({
      query: ({ columnId }) => ({
        url: `/columns/${columnId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['boards'],
    }),

    getAllCards: builder.query({
      query: columnId => ({
        url: `columns/${columnId}/cards`,
      }),
      providesTags: ['columns'],
    }),

    getAllCardsByColumnId: builder.query({
      query: columnId => ({
        url: `columns/${columnId}/cards `,
        method: 'GET',
      }),
      providesTags: ['columns'],
    }),

    getAllFillteredCardsByColumnId: builder.query({
      query: ({ columnId, priority }) => ({
        url: `columns/${columnId}/cards?f=${priority} `,
        method: 'GET',
      }),
      providesTags: ['columns'],
    }),

    addCard: builder.mutation({
      query: ({ columnId, cardData }) => ({
        url: `columns/${columnId}/cards`,
        method: 'POST',
        body: cardData,
      }),
      invalidatesTags: ['cards'],
    }),

    updateCardById: builder.mutation({
      query: ({ cardId, FormData }) => ({
        url: `/cards/${cardId}`,
        method: 'PUT',
        body: FormData,
      }),
      invalidatesTags: ['cards'],
    }),

    deleteCardById: builder.mutation({
      query: cardId => ({
        url: `/cards/${cardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cards'],
    }),

    updateCardColumnById: builder.mutation({
      query: cardId => ({
        url: `/cards/${cardId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['cards'],
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
  useUpdateColumnByIdMutation,
  useDeleteColumnByIdMutation,

  useGetAllCardsQuery,
  useGetAllCardsByColumnIdQuery,
  useGetAllFillteredCardsByColumnIdQuery,
  useAddCardMutation,
  useUpdateCardByIdMutation,
  useDeleteCardByIdMutation,
  useUpdateCardColumnByIdMutation,
  
} = boardsAPI;
