import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { carouselApi } from '../slice/CarouselSlice';
import { allProductApi } from '../slice/AllProductsSlice';

// import useReducer from '../slice/UserOnlineSlice';

export const store = configureStore({
  reducer: {
    [carouselApi.reducerPath]: carouselApi.reducer,
    [allProductApi.reducerPath]: allProductApi.reducer,
    // user: useReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      carouselApi.middleware,
      allProductApi.middleware
    ),
});

setupListeners(store.dispatch);
