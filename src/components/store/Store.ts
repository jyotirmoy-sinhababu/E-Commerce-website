import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from '../slice/AuthSlice';

const Store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
