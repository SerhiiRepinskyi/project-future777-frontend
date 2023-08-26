import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  user: { name: null, email: null },
  token: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraRedusers: {},
  //   reducers: {
  //     setUser: (state, action) => {
  //       state.user = action.payload;
  //       state.isLoggedIn = true;
  //     },
  //     setLoggedIn: state => {
  //       state.isLoggedIn = true;
  //     },
  //     setToken: (state, action) => {
  //       state.token = action.payload;
  //     },
  //     setError: (state, action) => {
  //       state.error = action.payload;
  //     },
  //     logout: state => {
  //       state.user = { name: null, email: null };
  //       state.token = null;
  //       state.isLoggedIn = false;
  //     },
  //   },
});

export const { setUser, setToken, setLoggedIn, setError, logout } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
