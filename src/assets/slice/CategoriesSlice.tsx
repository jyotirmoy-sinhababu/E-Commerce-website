import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/products/categories',
  }),
  endpoints: (builder) => ({
    getCategoriesByName: builder.query({
      query: (name) => `categories/${name}`,
    }),
  }),
});

export const { useGetCategoriesByNameQuery } = categoriesApi;
