// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCarouselByNameQuery } = carouselApi;
