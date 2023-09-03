// import { logout } from "./authSlice";




// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (result?.error?.originalStatus === 403) {
//     console.log('sending refresh token');
//     const refreshResult = await baseQuery('auth/refresh', api, extraOptions);
//     if (refreshResult?.data) {
//       const user = api.getState().auth.user;
//       api.dispatch(setCredentials({ ...refreshResult.data, user }));
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logout());
//     }
//   }
//   return result;
// }

// export const authCurrenApi = createApi({
//   baseQuery: baseQueryWithReauth,
// endpoints: builder => ({})})