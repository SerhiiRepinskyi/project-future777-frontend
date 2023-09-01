// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const boardsApi = createApi({
//   reducerPath: 'boardsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://project-future777-backend.onrender.com/api/',
//   }),
//   tagTypes: ['boards'],
//   endpoints: builder => ({
//     getBoards: builder.query({
//       query: token => ({
//         url: 'boards',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }),
//       providesTags: ['boards'],
//     }),
//     addBoards: builder.mutation({
//       query: ({ boardsData, token }) => ({
//         url: 'boards',
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: boardsData,
//       }),
//       invalidatesTags: ['boards'],
//     }),
//     deleteBoards: builder.mutation({
//       query: ({ id, token }) => ({
//         url: `boards/${id}`,
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }),
//       invalidatesTags: ['boards'],
//     }),
//     updateBoards: builder.mutation({
//       query: ({ boardsData, id, token }) => ({
//         url: `boards/${id}`,
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: boardsData,
//       }),
//       invalidatesTags: ['boards'],
//     }),
//     getBoardById: builder.query({
//       query: ({ boardId, token }) => ({
//         url: `boards/${boardId}`,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }),
//       providesTags: ['boards'],
//     }),
//   }),
// });

// export const {
//   useGetBoardsQuery,
//   useAddBoardsMutation,
//   useDeleteBoardsMutation,
//   useUpdateBoardsMutation,
//   useGetBoardByIdQuery
// } = boardsApi;