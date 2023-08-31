// import { useLocation } from "react-router-dom";

//   const location = useLocation();

//   console.log(location.pathname)
// import { useDispatch, useSelector, useEffect } from 'react-redux';
// import { useGetCurrentUserQuery } from 'Services/API_Component/userAPI';


// const token = useSelector(state => state.auth.token);

//   const dispatch = useDispatch();

//   const { data: currentUser } = useGetCurrentUserQuery({
//     skip: token === null,
//   });

//   useEffect(() => {
//     if (token && currentUser) {
//       dispatch(setUserRefresh(currentUser));
//     }
//   }, [token, currentUser, dispatch]);

// export const saveTokenToLocalStorage = (token) => {
//   localStorage.setItem('token', token);
// };

// // export const getTokenFromLocalStorage = () => {
// //   return localStorage.getItem('token');
// // };

// // export const clearTokenFromLocalStorage = () => {
// //   localStorage.removeItem('token');
// // };

// const lastVisitedPage = localStorage.getItem('lastVisitedPage');
// if (!getTokenFromLocalStorage) {
//   window.location.href = `/login?redirect=${encodeURIComponent(lastVisitedPage)}`;
// }
