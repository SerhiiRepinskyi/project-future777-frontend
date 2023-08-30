import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { boardsApi } from './boards/boardSlice';
import { authAPI, userAPI} from 'Services/API_Component';
// import { authApi } from './auth/authApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { cardsApi } from './tasks/cardSlice';
import { columnsApi } from './columns/columnSlice';
import { boardsAPISlice, authAPISlice } from './slices';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const boardsPersistConfig = {
  key: 'boards',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, authAPISlice);
const persistedBoardReducer = persistReducer(boardsPersistConfig, boardsAPISlice);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,

    boards:persistedBoardReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [boardsApi.reducerPath]: boardsApi.reducer,
    [userAPI.reducerPath]:userAPI.reducer,
    [columnsApi.reducerPath]: columnsApi.reducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
      },
    })
      .concat([authAPI.middleware])
      .concat([boardsApi.middleware])
      .concat([userAPI.middleware])
      .concat([columnsApi.middleware])
      .concat([cardsApi.middleware]),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
