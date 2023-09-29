import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { carouselApi } from '../slice/CarouselSlice';
import { categoriesApi } from '../slice/CategoriesSlice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [carouselApi.reducerPath]: carouselApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      carouselApi.middleware,
      categoriesApi.middleware
    ),
});

setupListeners(store.dispatch);
