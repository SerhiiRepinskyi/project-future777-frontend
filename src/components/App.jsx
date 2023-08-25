import { NotFound } from 'pages/NotFound/NotFound';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import ('../pages/HomePage/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const ScreensPage = lazy(() => import ('../pages/ScreensPage/ScreensPage'));


export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route
            path="/auth/:id"
            element={/*<RestrictedRoute>*/ <AuthPage /> /*<RestrictedRoute>*/}
          />
          <Route
            path="/home"
            element={/*<PrivateRoute>*/ <HomePage /> /*<PrivateRoute>*/}
          />
          <Route
            path="/home/:boardName"
            element={/*<PrivateRoute>*/ <ScreensPage /> /*<PrivateRoute>*/}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
