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
      providesTags: ['boards', 'columns', 'cards'],
    }),

    getBoardContentById: builder.query({
      query: ({ id, filter }) => ({
        url: `boards/${id}/content`,
        params: { priority: filter },
      }),
      providesTags: ['boards', 'columns', 'cards', "id"],
    }),

    getBoardById: builder.query({
      query: id => ({
        url: `boards/${id}`,
      }),
      providesTags: ['boards', 'columns', 'cards'],
    }),

    addBoards: builder.mutation({
      query: boardsData => ({
        url: 'boards',
        method: 'POST',
        body: boardsData,
      }),
      invalidatesTags: ['boards', 'columns', 'cards'],
    }),

    deleteBoardById: builder.mutation({
      query: id => ({
        url: `boards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['boards', 'columns', 'cards'],
    }),

    updateBoardById: builder.mutation({
      query: ({ boardId, FormData }) => ({
        url: `boards/${boardId}`,
        method: 'PATCH',
        body: FormData,
      }),
      invalidatesTags: ['boards', 'columns', 'cards'],
    }),

    addColumn: builder.mutation({
      query: ({ boardId, title }) => ({
        url: `boards/${boardId}/columns`,
        method: 'POST',
        body: title,
      }),
      invalidatesTags: ['boards', 'columns', 'cards'],
    }),

    updateColumnById: builder.mutation({
      query: ({ columnId, title }) => ({
        url: `/columns/${columnId}`,
        method: 'PATCH',
        body: title,
      }),
      invalidatesTags: ['boards', 'columns', 'cards'],
    }),

    deleteColumnById: builder.mutation({
      query: ({ columnId }) => ({
        url: `/columns/${columnId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['boards', 'columns', 'cards'],
    }),

    getAllCards: builder.query({
      query: columnId => ({
        url: `columns/${columnId}/cards`,
      }),
      providesTags: ['boards', 'columns', 'cards'],
    }),

    getAllCardsByColumnId: builder.query({
      query: columnId => ({
        url: `columns/${columnId}/cards `,
        method: 'GET',
      }),
      providesTags: ['boards', 'columns', 'cards'],
    }),

    getAllFillteredCardsByColumnId: builder.query({
      query: ({ columnId, priority }) => ({
        url: `columns/${columnId}/cards?f=${priority} `,
        method: 'GET',
      }),
      providesTags: ['boards', 'columns', 'cards'],
    }),

    addCard: builder.mutation({
      query: ({ columnId, cardData }) => ({
        url: `columns/${columnId}/cards`,
        method: 'POST',
        body: cardData,
      }),
      invalidatesTags: ['boards', 'columns', 'cards'],
    }),

    updateCardById: builder.mutation({
      query: ({ cardId, cardData }) => ({
        url: `/cards/${cardId}`,
        method: 'PUT',
        body: cardData,
      }),
      invalidatesTags: ['boards', 'columns', 'cards'],
    }),

    deleteCardById: builder.mutation({
      query: cardId => ({
        url: `/cards/${cardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['boards', 'columns', 'cards'],
    }),

    updateCardColumnById: builder.mutation({
      query: cardId => ({
        url: `/cards/${cardId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['boards', 'columns', 'cards'],
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
