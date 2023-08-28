// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// export const boardsApi = createApi({
//   reducerPath: '',
//   baseQuery: fetchBaseQuery({
//     baseUrl: '',
//   }),
//   tagTypes: [''],
//   endpoints: builder => ({
//     getBoards: builder.query({
//       query: token => ({
//         url: '',
//         headers: {
//           Authorization: token,
//         },
//       }),
//       providesTags: [''],
//     }),
//     addBoards: builder.mutation({
//       query: ({ boardsData, token }) => ({
//         url: '',
//         method: 'POST',
//         headers: {
//           Authorization: token,
//         },
//         body: boardsData,
//       }),
//       invalidatesTags: [''],
//     }),
//   }),
// });

// export const { useGetBoardsQuery, useAddBoardsMutation } = boardsApi;
