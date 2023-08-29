// import { Navigate} from "react-router-dom";
// import { useSelector } from "react-redux";


const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(state => state.auth.token);

  // return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;