import { Suspense, lazy} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Loader from './Loader/Loader';


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
                    <PrivateRoute>
                    <ScreensPage />
                    </PrivateRoute>                    
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
