import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carouselApi = createApi({
  reducerPath: 'carouselApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/products?limit=10',
  }),
  endpoints: (builder) => ({
    getCarouselByName: builder.query({
      query: (name) => `products/${name}`,
    }),
  }),
});

export const { useGetCarouselByNameQuery } = carouselApi;
