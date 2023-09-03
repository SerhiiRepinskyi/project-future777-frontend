import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { authAPI, boardsAPI, cardsAPI, columnsAPI, userAPI } from 'Services/API_Component';
// import { authApi } from './auth/authApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {authAPISlice, userDataSlice } from './slices';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const boardsPersistConfig = {
  key: 'boardData',
  storage,
};

const persistedReducer = persistReducer(authPersistConfig, authAPISlice);
const persistedBoardReducer = persistReducer(
  boardsPersistConfig,
  userDataSlice
);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,

    userBoardsData: persistedBoardReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [boardsAPI.reducerPath]: boardsAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [columnsAPI.reducerPath]: columnsAPI.reducer,
    [cardsAPI.reducerPath]: cardsAPI.reducer,
    userData: userDataSlice, //КОМБІНОВАНИЙ РЕДЮСЕР БОРД КОЛОНКА ТА КАРТКА!!!
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
      .concat([columnsAPI.middleware])
      .concat([cardsAPI.middleware]),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
