import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Loader from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCurrentUserQuery } from 'redux/auth/authApi';
import { setUserRefresh } from 'redux/auth/authSlice';
// import { PrivateRoute } from 'routes/PrivateRoute';
import GlobalStyles from './GlobalStyles';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const ScreensPage = lazy(() => import('../pages/ScreensPage/ScreensPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const token = useSelector(state => state.auth.token);

  const dispatch = useDispatch();

  const { data: currentUser } = useGetCurrentUserQuery({
    skip: token === null,
  });

  useEffect(() => {
    if (token && currentUser) {
      dispatch(setUserRefresh(currentUser));
    }
  }, [ token, currentUser, dispatch]);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* default route to /welcome */}
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route
            path="/auth/:id"
            element={/*<RestrictedRoute>*/ <AuthPage /> /*<RestrictedRoute>*/}
          />
          <Route
            path="/home"
            element={ /*<PrivateRoute>*/ <HomePage /> /*</PrivateRoute>*/}
          />
          <Route
            path="/home/:boardName"
            element={ /*<PrivateRoute>*/  <ScreensPage /> /*</PrivateRoute>*/}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Suspense>
      <GlobalStyles/>
    </div>
  );
};
