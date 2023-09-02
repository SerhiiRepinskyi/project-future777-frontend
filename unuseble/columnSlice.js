// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// export const columnsApi = createApi({
//   reducerPath: 'columnsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://project-future777-backend.onrender.com/api/',
//   }),
//   tagTypes: ['columns'],
//   endpoints: builder => ({
//     addColumn: builder.mutation({
//       query: ({ id, title, token }) => ({
//         url: `boards/${id}/columns`,
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: title,
//       }),
//       invalidatesTags: ['columns'],
//     }),
//     deleteColumn: builder.mutation({
//       query: ({ id, token }) => ({
//         url: `columns/${id}`,
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }),
//       invalidatesTags: ['columns'],
//     }),
//     updateColumn: builder.mutation({
//       query: ({ id, updatedData, token }) => ({
//         url: `columns/${id}`,
//         method: 'PUT',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: updatedData,
//       }),
//       invalidatesTags: ['columns'],
//     }),
//   }),
// });

// export const {
//   useAddColumnMutation,
//   useDeleteColumnMutation,
//   useUpdateColumnMutation,
// } = columnsApi;
