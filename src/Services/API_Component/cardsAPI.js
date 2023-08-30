import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseQuery from '../API_Helper/APIHelper'

export const cardsAPI = createApi({
    reducerPath: 'cardsAPI',
    baseQuery: fetchBaseQuery({ baseQuery }),
    endpoints: (builder) => ({ addCard: builder.mutation({
      query: (columnId, FormData) => ({
        url: `columns/:${columnId}/cards`,
        method: "POST",
        body: FormData,
      }),
      providesTags: ["columns"],
     }),
     

     updateCardById: builder.mutation({
      query: (cardId, FormData ) => ({
        url: `/cards/:${cardId}`,
        method: "PUT",
        body: FormData,
      }),
      providesTags: ["cards"],
     }),
     

     deleteCardById: builder.mutation({
      query: (cardId) => ({
        url: `/columns/:${cardId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["columns"],
     }),


    updateCardColumnById: builder.mutation({
      query: (cardId ) => ({
        url: `/cards/:${cardId}`,
        method: "PATCH",
      }),
      providesTags: ["cards"],
     }), 

  }),
});

export const {
  useAddCardMutation,
  useUpdateCardByIdMutation,
  useDeleteCardByIdMutation,
  useUpdateCardColumnByIdMutation
} = cardsAPI;