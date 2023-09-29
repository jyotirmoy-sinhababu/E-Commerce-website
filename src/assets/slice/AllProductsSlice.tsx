import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const allProductApi = createApi({
  reducerPath: 'allProductApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: (builder) => ({
    getAllProductByName: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
});

export const { useGetAllProductByNameQuery } = allProductApi;
