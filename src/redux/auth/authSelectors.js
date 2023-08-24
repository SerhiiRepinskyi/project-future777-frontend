export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectTheme = state => state.auth.user.theme;
export const selectIsFetchingCurrent = state =>
  state.auth.isFetchingCurrentUser;

const authSelectors = {
  selectUser,
  selectIsLoggedIn,
  selectTheme,
  selectIsFetchingCurrent,
};
export default authSelectors;
