import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../API_Helper/APIHelper';

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: baseQuery,
  tagTypes: ['boards', 'columns', 'cards'],
  endpoints: builder => ({
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

    getAllCards: builder.query({
      query: columnId => ({
        url: `columns/${columnId}/cards`,
      }),
      providesTags: ['columns'],
    }),

    // addCard: builder.mutation({
    //   query: ({ columnId, cardData }) => ({
    //     url: `columns/${columnId}/cards`,
    //     method: 'POST',
    //     body: cardData,
    //   }),
    //   invalidatesTags: ['boards', 'columns', 'cards'],
    // }),

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
  useUpdateCardByIdMutation,
  useDeleteCardByIdMutation,
  useUpdateCardColumnByIdMutation,
  useGetAllCardsQuery,
} = cardsAPI;
