// як приклад!!!

import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

// RestrictedRoute - обмежений маршрут
export const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  // Запобігаємо переходу на редірект за умовою
  // Якщо користувач залогінений, то рендеримо component
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
