//           як приклад!!!

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <AppBar />

      <main>
        {/* Suspense - рендеринг дочірніх компонентів лише за потреби*/}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
