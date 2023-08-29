import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://project-future777-backend.onrender.com/api/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    console.log(token)
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

console.log(baseQuery);


export default baseQuery;
