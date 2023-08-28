import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.token);
  const isRefreshing = useSelector(state => state.auth.isRefreshing); 

  if (!isLoggedIn && !isRefreshing) {
    return <Navigate to="/welcome" replace />;
  }
  return children;
};


