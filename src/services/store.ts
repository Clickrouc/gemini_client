import { configureStore } from '@reduxjs/toolkit';
import { accountsApi } from './accounts/api';
import { proxiesApi } from './proxies/api';

const store = configureStore({
  reducer: {
    [accountsApi.reducerPath]: accountsApi.reducer,
    [proxiesApi.reducerPath]: proxiesApi.reducer,
  },
  // @ts-ignore
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    accountsApi.middleware,
    proxiesApi.middleware,
  ),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
