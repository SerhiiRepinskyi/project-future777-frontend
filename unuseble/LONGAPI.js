// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://project-future777-backend.onrender.com/api/',
//   prepareHeaders: (headers, { getState }) => {
//     const token = getState().auth.token;
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({baseQuery}),
//   endpoints: (builder) => ({
//    // -----------------------------AUTH QUERY-------------------------------
    
    
//     registerUser: builder.mutation({
//       query: credentials => ({
//         url: "auth/register",
//         method: "POST",
//         body: credentials,
//         skipToken:true,
//       })
//     }),
  
    
//     loginUser: builder.mutation({
//             query: credentials => ({
//                 url: "auth/login",
//                 method: "POST",
//                 body: credentials,    
//               providesTags: ['User'],  
//           })
//         }),

    
//     logoutUser: builder.mutation({
//             query:() => ({
//                 url: "auth/logout",
//                 method: "POST",
//             invalidatesTags: ['User'],
//           })
//         }),
// // -----------------------------USER QUERY-------------------------------
      
//     currentUser: builder.query({
//         query: () => ({
//           url: "user/current",
//           providesTags: ['User'],
//           })
//       }),

      
//     themeUser: builder.mutation({
//             query:(themeData) => ({
//                 url: "user/theme",
//                 method: "PATCH",
//             body: themeData,
//           })
//     }),
    

//     avatarUser: builder.mutation({
//       query: FormData => ({
//         url: "user/avatar",
//         method: "PATCH",
//         body: FormData,
//       })
//     }),


//     helpUser: builder.mutation({
//       query: FormData => ({
//         url: "user/help",
//         method: "POST",
//         body: FormData,
//       })
//     }),
      
// // -----------------------------BOARDS QUERY-------------------------------
//     getBoards: builder.query({
//       query: () => ({
//         url: "boards",
//       }),
//       providesTags: ["boards"],
//     }),


//     getBoardById: builder.query({
//       query: (id) => ({
//         url: `boards/:${id}`,
//       }),
//       providesTags: ["board"],
//     }),


//     addBoards: builder.mutation({
//       query:  boardsData => ({
//         url: "boards",
//         method: "POST",
//         body: boardsData,
//       }),
//       invalidatesTags: ["boards"],
//     }),


//     deleteBoardById:builder.mutation({
//       query: (id) => ({
//         url: `boards/:${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["board"],
//     }),


//     updateBoardById:builder.mutation({
//       query: (id, FormData) => ({
//         url: `boards/:${id}`,
//         method: "PATCH",
//         body:FormData,
//       }),
//       providesTags: ["board"],
//     }),

//     // -----------------------------COLUMNS QUERY-------------------------------

//     addColumn: builder.mutation({
//       query: (boardId, title) => ({
//         url: `boards/:${boardId}/columns`,
//         method: "POST",
//         body: title,
//       }),
//       providesTags: ["columns"],
//     }),


//     updateColumnById: builder.mutation({
//       query: (columnId, title ) => ({
//         url: `/columns/:${columnId}`,
//         method: "PATCH",
//         body: title,
//       }),
//       providesTags: ["columns"],
//     }),


//      deleteColumnById: builder.mutation({
//       query: (columnId) => ({
//         url: `/columns/:${columnId}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["columns"],
//      }),
     
//      // -----------------------------CARDS QUERY-------------------------------

//      addCard: builder.mutation({
//       query: (columnId, FormData) => ({
//         url: `columns/:${columnId}/cards`,
//         method: "POST",
//         body: FormData,
//       }),
//       providesTags: ["columns"],
//      }),
     

//      updateCardById: builder.mutation({
//       query: (cardId, FormData ) => ({
//         url: `/cards/:${cardId}`,
//         method: "PUT",
//         body: FormData,
//       }),
//       providesTags: ["cards"],
//      }),
     

//      deleteCardById: builder.mutation({
//       query: (cardId) => ({
//         url: `/columns/:${cardId}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["columns"],
//      }),


//     updateCardColumnById: builder.mutation({
//       query: (cardId ) => ({
//         url: `/cards/:${cardId}`,
//         method: "PATCH",
//       }),
//       providesTags: ["cards"],
//      }), 

//   }),
// });

// export const {
//   useRegisterUserMutation,
//   useLoginUserMutation,
//   useLogoutUserMutation,
//   useCurrentUserQuery,
//   useThemeUserMutation,
//   useAvatarUserMutation,
//   useHelpUserMutation,
//   useGetBoardsQuery,
//   useGetBoardByIdQuery,
//   useAddBoardsMutation,
//   useDeleteBoardByIdMutation,
//   useUpdateBoardByIdMutation,
//   useAddColumnMutation,
//   useUpdateColumnByIdMutation,
//   useDeleteColumnByIdMutation,
//   useAddCardMutation,
//   useUpdateCardByIdMutation,
//   useDeleteCardByIdMutation,
//   useUpdateCardColumnByIdMutation} = api;
