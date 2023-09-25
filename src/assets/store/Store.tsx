import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { carouselApi } from '../slice/CarouselSlice';

import carouselDtlReducer from '../slice/CarouselDtlsSlice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [carouselApi.reducerPath]: carouselApi.reducer,
    carouselDtls: carouselDtlReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carouselApi.middleware),
});

setupListeners(store.dispatch);
