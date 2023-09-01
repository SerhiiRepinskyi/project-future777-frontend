import { Suspense, lazy} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Loader from './Loader/Loader';


import GlobalStyles from './GlobalStyles';
// import {useNavigation} from '../hooks/navigationHook'
import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { PrivateRoute } from 'routes/PrivateRoute';
import { RestrictedRoute } from 'routes/RestrictedRoute';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const ScreensPage = lazy(() => import('../pages/ScreensPage/ScreensPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
 
  // useNavigation()


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
