// як приклад!!!

import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isRefreshing && !isLoggedIn;

  // Якщо не рефрешиться (завантажується токен з локалстораж) і не залогінений,
  //  то Navigate на redirectTo (по дефолту - '/')
  // Якщо залогінений, то рендеримо компонент
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
