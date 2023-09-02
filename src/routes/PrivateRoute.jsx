import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.token);
  
  if (!isLoggedIn ) {

    return <Navigate to="/welcome" replace />;
  }
  return children;
};
