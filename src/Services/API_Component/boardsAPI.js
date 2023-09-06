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
      providesTags: ['boards', 'cards', 'columns'],
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
      invalidatesTags: ['columns'],
    }),

    updateColumnById: builder.mutation({
      query: ({ columnId, title }) => ({
        url: `/columns/${columnId}`,
        method: 'PATCH',
        body: title,
      }),
      invalidatesTags: ['columns'],
    }),

    deleteColumnById: builder.mutation({
      query: ({ columnId }) => ({
        url: `/columns/${columnId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['columns'],
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
      providesTags: ['cards'],
    }),

    getAllFillteredCardsByColumnId: builder.query({
      query: ({ columnId, priority }) => ({
        url: `columns/${columnId}/cards?f=${priority} `,
        method: 'GET',
      }),
      providesTags: ['cards'],
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
      query: ({ cardId, cardData }) => ({
        url: `/cards/${cardId}`,
        method: 'PUT',
        body: cardData,
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
      query: ({ id, columnIddata }) => ({
        url: `/cards/${id}`,
        method: 'PATCH',
        body: columnIddata,
      }),
      invalidatesTags: ['boards', 'cards', 'columns'],
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
