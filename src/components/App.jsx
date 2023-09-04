import { Suspense, lazy} from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Loader from './Loader/Loader';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


import GlobalStyles from './GlobalStyles';
// import {useNavigation} from '../hooks/navigationHook'
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { PrivateRoute } from 'routes/PrivateRoute';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { useGetCurrentUserQuery } from 'Services/API_Component';
import { logout, setUserRefresh} from 'redux/auth/authAPISlice';


const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const ScreensPage = lazy(() => import('../pages/ScreensPage/ScreensPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  const token = useSelector(state => state.auth.token);
  const boardId = useSelector(state => state.boards.boardId);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  const { data: currentUser, error } = useGetCurrentUserQuery(token,{
    skip: token === null,});

  useEffect(() => {
    if (error) {
      if (error.status === 401) {
        dispatch(logout(currentUser))
      } else {
        console.error("Інша помилка отримання користувача:", error)}}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  useEffect(() => {
    if (token && currentUser) {
      dispatch(setUserRefresh(currentUser));
      if (boardId) {
        const pathParts = location.pathname.split('/');
        if (pathParts.length <= 2) {
          navigate(`/home/${boardId}`);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, currentUser])

  return (
    <div>
      {isRefreshing ? (
        <Loader />
      ) : (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/welcome" />} />
              <Route
                path="/welcome"
                element={
                  <RestrictedRoute>
                    <WelcomePage />
                  </RestrictedRoute>
                }
              />

              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <HomePage />
                  </PrivateRoute>
                }
              >
                <Route path=":boardId" element={<ScreensPage />} />
              </Route>

              <Route
                path="/auth/:id"
                element={
                  <RestrictedRoute>
                    <AuthPage />
                  </RestrictedRoute>
                }
              >
                <Route path="login" element={<LoginForm />} />
                <Route path="register" element={<RegisterForm />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <GlobalStyles />
        </LocalizationProvider>
      )}
    </div>
  );
};
