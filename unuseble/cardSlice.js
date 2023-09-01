// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// export const cardsApi = createApi({
//   reducerPath: 'cardsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://project-future777-backend.onrender.com/api/',
//   }),
//   tagTypes: ['cards'],
//   endpoints: builder => ({
//     getCards: builder.query({
//       query: ({ columnId, token }) => ({
//         url: `columns/${columnId}/cards`,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }),
//       providesTags: ['cards'],
//     }),
//     addCardToColumn: builder.mutation({
//       query: ({ columnId, cardData, token }) => ({
//         url: `columns/${columnId}/cards`,
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: cardData,
//       }),
//       invalidatesTags: ['cards'],
//     }),
//     deleteCard: builder.mutation({
//       query: ({ id, token }) => ({
//         url: `cards/${id}`,
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }),
//       invalidatesTags: ['cards'],
//     }),
//     updateCard: builder.mutation({
//       query: ({ id, updatedData, token }) => ({
//         url: `cards/${id}`,
//         method: 'PUT',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: updatedData,
//       }),
//       invalidatesTags: ['cards'],
//     }),
//   }),
// });

// export const {
//   useGetCardsQuery,
//   useAddCardToColumnMutation,
//   useDeleteCardMutation,
//   useUpdateCardMutation,
// } = cardsApi;
