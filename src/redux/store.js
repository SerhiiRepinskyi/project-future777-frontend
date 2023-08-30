import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { boardsApi } from './boards/boardSlice';

import { authApi } from './auth/authApi';
import { authReducer } from './auth/index';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { cardsApi } from './tasks/cardSlice';
import { columnsApi } from './columns/columnSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: persistedReducer,
    [boardsApi.reducerPath]: boardsApi.reducer,
    [columnsApi.reducerPath]: columnsApi.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({})
      .concat([authApi.middleware])
      .concat([boardsApi.middleware])
      .concat([columnsApi.middleware])
      .concat([cardsApi.middleware]),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
