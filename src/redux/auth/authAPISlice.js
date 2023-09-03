import { createSlice } from '@reduxjs/toolkit';
// import { API } from 'Services/API';

const initialState = {
  user: null,
  token: null,
  error: null,
  isLoggedIn: false,
};

const authAPISlice = createSlice({
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
      state.isLoggedIn = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUserRefresh: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     // Обробка реєстрації користувача
  //     .addMatcher(API.useRegisterMutation.matchPending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addMatcher(API.useRegisterMutation.matchFulfilled, (state, action) => {
  //       state.loading = false;
  //       state.user = action.payload; // Зберігаємо дані користувача
  //     })
  //     .addMatcher(API.useRegisterMutation.matchRejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error; // Зберігаємо об'єкт помилки
  //     })
  //     // Обробка входу користувача
  //     .addMatcher(API.useLogInMutation.matchPending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addMatcher(API.useLogInMutation.matchFulfilled, (state, action) => {
  //       state.loading = false;
  //       state.user = action.payload; // Зберігаємо дані користувача
  //     })
  //     .addMatcher(API.useLogInMutation.matchRejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error; // Зберігаємо об'єкт помилки
  //     })
  //     // Обробка виходу користувача
  //     .addMatcher(API.useLogOutMutation.matchPending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addMatcher(API.useLogOutMutation.matchFulfilled, (state) => {
  //       state.loading = false;
  //       state.user = null; // Обнуляємо дані користувача
  //     })
  //     .addMatcher(API.useLogOutMutation.matchRejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error; // Зберігаємо об'єкт помилки
  //     });
    
  // },
});
 
export const {
  setCredentials,
  setIsLoggedIn,
  logout,
  setError,
  setUserRefresh,
} = authAPISlice.actions;

export default authAPISlice.reducer;