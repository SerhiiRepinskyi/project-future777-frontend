import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Loader from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCurrentUserQuery } from 'Services/API_Component/userAPI';
import { setUserRefresh } from 'redux/auth/authAPISlice';

import GlobalStyles from './GlobalStyles';

import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { PrivateRoute } from 'routes/PrivateRoute';

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
  }, [token, currentUser, dispatch]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/welcome" element={<WelcomePage />} />

            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            >
              <Route
                path="/home/:boardId"
                element={
                  <Suspense fallback={<Loader />}>
                    <ScreensPage />
                  </Suspense>
                }
              />
            </Route>

            <Route path="/auth/:id" element={<AuthPage />}>
              <Route path="login" element={<LoginForm />} />
              <Route path="register" element={<RegisterForm />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <GlobalStyles />
      </LocalizationProvider>
    </div>
  );
};
