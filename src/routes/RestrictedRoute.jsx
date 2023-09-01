import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.token);
  

  if (!isLoggedIn) {
    return children;
  }
  return <Navigate to="/home" replace />;
};
