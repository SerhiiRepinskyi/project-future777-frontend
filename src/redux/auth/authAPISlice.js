import { createSlice } from '@reduxjs/toolkit';
import { API } from 'Services/API';

const initialState = {
  user: null,
  token: null,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    setToken: (state, action) => {
      const token = action.payload;
      state.token = token;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUserRefresh: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // Обробка реєстрації користувача
      .addMatcher(API.useRegisterUserMutation.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(API.useRegisterUserMutation.matchFulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Зберігаємо дані користувача
      })
      .addMatcher(API.useRegisterUserMutation.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error; // Зберігаємо об'єкт помилки
      })
      // Обробка входу користувача
      .addMatcher(API.useLoginUserMutation.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(API.useLoginUserMutation.matchFulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Зберігаємо дані користувача
      })
      .addMatcher(API.useLoginUserMutation.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error; // Зберігаємо об'єкт помилки
      })
      // Обробка виходу користувача
      .addMatcher(API.useLogoutUserMutation.matchPending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(API.useLogoutUserMutation.matchFulfilled, (state) => {
        state.loading = false;
        state.user = null; // Обнуляємо дані користувача
      })
      .addMatcher(API.useLogoutUserMutation.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error; // Зберігаємо об'єкт помилки
      });
    
  },
});
 
export const {
  setCredentials,
  setIsLoggedIn,
  logout,
  setError,
  setUserRefresh,
} = authSlice.actions;
export const { setToken } = authSlice.actions;

export default authSlice.reducer;