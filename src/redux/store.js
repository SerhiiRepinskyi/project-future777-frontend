
// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
// } from 'redux-persist';
// import { boardsApi } from "./boards/boardSlice";



// import { authApi } from './auth/authApi';
// import { authReducer } from './auth/index';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// const persistedReducer = persistReducer(authPersistConfig, authReducer);

// export const store = configureStore({
//   reducer: {
//     [authApi.reducerPath]: authApi.reducer,
//     auth: persistedReducer,
//   [boardsApi.reducerPath]: boardsApi.reducer,
//   },

//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({}).concat([
//       authApi.middleware,
//     ]),
// });

// setupListeners(store.dispatch);

// export const persistor = persistStore(store);


import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authApi } from './auth/authApi';
import { authReducer } from './auth/index';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

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
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([authApi.middleware]),
  devTools: process.env.NODE_ENV==="development"
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

