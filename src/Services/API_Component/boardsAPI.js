import { createApi } from '@reduxjs/toolkit/query/react';
import  baseQuery  from '../API_Helper/APIHelper';




export const boardsAPI = createApi({
    reducerPath: 'boardsAPI',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getBoards: builder.query({
            query: () => ({
                url: "boards",
            }),
            providesTags: ["boards"],
        
        }),


        getBoardById: builder.query({
            query: (id) => ({
                url: `boards/:${id}`,
            }),
            providesTags: ["board"],
        }),


        addBoards: builder.mutation({
            query: boardsData => ({
                url: "boards",
                method: "POST",
                body: boardsData,
            }),
            invalidatesTags: ["boards"],
        }),


        deleteBoardById: builder.mutation({
            query: (id) => ({
                url: `boards/:${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["board"],
        }),


        updateBoardById: builder.mutation({
            query: (id, FormData) => ({
                url: `boards/:${id}`,
                method: "PATCH",
                body: FormData,
            }),
            providesTags: ["board"],
        }),
    })
})

export const {
  useGetBoardsQuery,
  useGetBoardByIdQuery,
  useAddBoardsMutation,
  useDeleteBoardByIdMutation,
  useUpdateBoardByIdMutation
} = boardsAPI;