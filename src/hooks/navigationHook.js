// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useGetCurrentUserQuery } from 'Services/API_Component/userAPI';
// import { setUserRefresh } from 'redux/auth/authAPISlice';

// export function NavigationHook() {
// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentUser, logoutUser } from 'redux/auth/authAPISlice';
// import { useGetCurrentUserQuery } from 'Services/API_Component/userAPI';
// import { useQueryClient } from 'react-query';

import { useDispatch, useSelector } from 'react-redux';
import { setUserRefresh} from 'redux/auth/authAPISlice';
import { useGetCurrentUserQuery } from 'Services/API_Component/userAPI';
import {  logOut} from 'Services/API_Component/authAPI';
import { useQueryClient } from 'react-query';

export function NavigationHook() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const token = useSelector((state) => state.auth.token);
//   const [logOut] = useLogOutMutation();

  const { data: currentUser } = useGetCurrentUserQuery(token, {
    enabled: token !== null,
  });

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!currentUser && !isLoggedIn) {
    const currentUserQuery = queryClient.getQueryData('getCurrentUser');
    
    if (currentUserQuery?.error?.status === 401) {
      dispatch(logOut());
      // Встановіть флаг isLoggingOut в Redux, щоб уникнути повторних викликів logOut
      // dispatch(logoutUser());
    }
  }

  if (currentUser) {
    dispatch(setUserRefresh(currentUser));
  }

  // ЗАПИС ОСТАННЬОЇ СТОРІНКИ ВІДВІДУВАННЯ
//   const here = window.location.pathname;
//   localStorage.setItem('lastVisitedPage', here);

  return null;
}

export default NavigationHook;

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const token = useSelector((state) => state.auth.token);

    // // ПЕРЕВІРКА ТА ПЕРЕАДРЕСАЦІЯ ЗАКОРИСТОВАНОГО АКТУАЛЬНОГО ЮЗЕРА
    // const { data: currentUser, error } = useGetCurrentUserQuery({
    //     skip: token === null,
    // });

    // if (error && error.status === 401) {
    //     navigate('/welcome');
    // }

    // useEffect(() => {
        // if (error && error.status === 401) {
    //     navigate('/welcome');
    //     if (token && currentUser !== null && currentUser !== undefined) {
    //         // Відправити дію через Redux за допомогою dispatch
    //         dispatch(setUserRefresh(currentUser));
    //     }
    // }, [token, currentUser, dispatch]);

    // // ЗАПИС ОСТАННЬОЇ СТОРІНКИ ВІДВІДУВАННЯ
    // const lastVisitedPage = localStorage.getItem('lastVisitedPage');



    //   useEffect(() => {
    //     if (lastVisitedPage) {
    //       navigate(lastVisitedPage);
    //       }
      
    //   }, []);

    //   const here = window.location.pathname;
    //   useEffect(() => {
    //     localStorage.setItem('lastVisitedPage', here);
    //   }, []);

    //   return null;
    // }
// }
// export default NavigationHook
