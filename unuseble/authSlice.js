// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   token: null,
//   error: null,
//   isLoggedIn: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     setToken: (state, action) => {
//       state.token = action.payload.token;
//     },
//     setUser: (state, action) => {
//       state.user = action.payload.user;
//     },
//     setIsLoggedIn: (state, action) => {
//       state.isLoggedIn = true;
//     },
//     logout: (state, action) => {
//       state.user = null;
//       state.token = null;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },

//     setUserRefresh: (state, action) => {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//     },
//   },
//   extraRedusers: {},
// });

// export const {
//   setCredentials,
//   setToken,
//   setUser,
//   setIsLoggedIn,
//   logout,
//   setError,
//   setUserRefresh,
// } = authSlice.actions;

// export default authSlice.reducer;
