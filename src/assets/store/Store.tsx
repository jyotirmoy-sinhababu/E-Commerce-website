import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { carouselApi } from '../slice/CarouselSlice';
import { categoriesApi } from '../slice/CategoriesSlice';
import { allProductApi } from '../slice/AllProductsSlice';

// import useReducer from '../slice/UserOnlineSlice';

export const store = configureStore({
  reducer: {
    [carouselApi.reducerPath]: carouselApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [allProductApi.reducerPath]: allProductApi.reducer,
    // user: useReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      carouselApi.middleware,
      categoriesApi.middleware,
      allProductApi.middleware
    ),
});

setupListeners(store.dispatch);
