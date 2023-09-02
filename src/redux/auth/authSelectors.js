export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectTheme = state => state.auth.user.theme;
export const selectIsFetchingCurrent = state =>
  state.auth.isFetchingCurrentUser;
   export const selectAvatar = state => state.auth.user.avatarURL;

const authSelectors = {
  selectUser,
  selectIsLoggedIn,
  selectTheme,
  selectIsFetchingCurrent,
  selectAvatar,
};
export default authSelectors;
