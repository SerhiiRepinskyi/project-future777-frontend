import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../API_Helper/APIHelper'

export const columnsAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseQuery }),
    endpoints: (builder) => ({
        addColumn: builder.mutation({
            query: (boardId, title) => ({
                url: `boards/:${boardId}/columns`,
                method: "POST",
                body: title,
            }),
            providesTags: ["columns"],
        }),


        updateColumnById: builder.mutation({
            query: (columnId, title) => ({
                url: `/columns/:${columnId}`,
                method: "PATCH",
                body: title,
            }),
            providesTags: ["columns"],
        }),


        deleteColumnById: builder.mutation({
            query: (columnId) => ({
                url: `/columns/:${columnId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["columns"],
        }),
    })
})

export const {
  useAddColumnMutation,
  useUpdateColumnByIdMutation,
  useDeleteColumnByIdMutation
} = columnsAPI;