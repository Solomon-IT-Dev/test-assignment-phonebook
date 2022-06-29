import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phoneBookApi } from 'services/api';
import { filterSlice } from './filter/slice';

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phoneBookApi.middleware),
});

setupListeners(store.dispatch);
