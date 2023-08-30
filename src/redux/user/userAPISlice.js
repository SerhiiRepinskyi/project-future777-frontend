import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  userData:{},
  theme: null,
  avatarURL: null,
  error: null,
};

const userAPISlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            const { userName, theme, avatarURL } = action.payload;
            state.userName = userName;
            state.theme = theme;
            state.avatarURL = avatarURL;
        },
        setAvatarURL: (state, action) => {
            const avatarURL = action.payload.path;
            state.avatarURL = avatarURL;
        },
        setTheme: (state, action) => {
            const theme = action.theme;
            state.theme = theme;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setUserNone: (state, action) => {
            state.userData = {};
            state.theme = null;
            state.avatarURL = null;
            state.error = null;
            
        },
    },
    
});
//   extraReducers: (builder) => {
//     builder
//       // Обробка реєстрації користувача
//       .addMatcher(API.useRegisterUserMutation.matchPending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addMatcher(API.useRegisterUserMutation.matchFulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload; // Зберігаємо дані користувача
//       })
//       .addMatcher(API.useRegisterUserMutation.matchRejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error; // Зберігаємо об'єкт помилки
//       })
//       // Обробка входу користувача
//       .addMatcher(API.useLoginUserMutation.matchPending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addMatcher(API.useLoginUserMutation.matchFulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload; // Зберігаємо дані користувача
//       })
//       .addMatcher(API.useLoginUserMutation.matchRejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error; // Зберігаємо об'єкт помилки
//       })
//       // Обробка виходу користувача
//       .addMatcher(API.useLogoutUserMutation.matchPending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addMatcher(API.useLogoutUserMutation.matchFulfilled, (state) => {
//         state.loading = false;
//         state.user = null; // Обнуляємо дані користувача
//       })
//       .addMatcher(API.useLogoutUserMutation.matchRejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error; // Зберігаємо об'єкт помилки
//       });
    
//   },

 
export const {
  setUserData,
  setAvatarURL,
  setTheme,
  setError,
} = userAPISlice.actions;


export default userAPISlice;