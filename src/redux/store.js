import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { authAPI, boardsAPI, userAPI } from 'Services/API_Component';
// import { authApi } from './auth/authApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {authAPISlice, boardsAPISlice} from './slices';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const boardsPersistConfig = {
  key: 'boards' ,
  storage,
};

const persistedReducer = persistReducer(authPersistConfig, authAPISlice);
const persistedBoardReducer = persistReducer(
  boardsPersistConfig,
  boardsAPISlice
);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    boards: persistedBoardReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [boardsAPI.reducerPath]: boardsAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,

    
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    })
      .concat([authAPI.middleware])
      .concat([boardsAPI.middleware])
      .concat([userAPI.middleware])
   
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
