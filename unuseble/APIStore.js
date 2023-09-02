// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
// import { API } from 'Services/API';
// import {
//   authAPISlice,
//   boardsAPISlice,
//   columnAPISlice,
//   cardsAPISlice,
//   userAPISlice,
// } from './slices';

// const authPersistConfig = {
//   key: 'authAPI',
//   storage,
//   whitelist: ['token'],
// };

// const boardPersistConfig = {
//   key: 'boardsAPI', // Використовуйте окремий ключ для збереження дошок
//   storage,
//   whitelist: ['boardId', 'boardData'], // Оновіть список полів для збереження
// };

// const persistedReducer = persistReducer(authPersistConfig, authAPISlice.reducer);

// export const store = configureStore({
//   reducer: {
//     authAPI: persistedReducer,
//     [API.authAPI.reducerPath]: authAPISlice.reducer,
//     [API.boardsAPI.reducerPath]: boardsAPISlice.reducer,
//     [API.columnsAPI.reducerPath]: columnAPISlice.reducer,
//     [API.cardsAPI.reducerPath]: cardsAPISlice.reducer,
//     [API.userAPI.reducerPath]: userAPISlice.reducer,
//   },

//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({})
//       .concat([API.authAPI.middleware])
//       .concat([API.boardsAPI.middleware])
//       .concat([API.columnsAPI.middleware])
//       .concat([API.cardsAPI.middleware])
//       .concat([API.userAPI.middleware])
// });

// setupListeners(store.dispatch);

// export const persistor = persistStore(store);
