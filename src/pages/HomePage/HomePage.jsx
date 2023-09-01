import { AppBar, Box } from '@mui/material';

import { useState } from 'react';
import { SIDEBARWIDTH } from 'components/Sidebar/SidebarCONSTANTS';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { DefaultScreenPage } from 'pages/ScreensPage/DefaultScreenPage';
import { API } from 'Services/API';

const HomePage = () => {
  const isLoggdIn = useSelector(selectIsLoggedIn);
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);
  const handleSidebarToggle = () => setIsMobileSidebar(!isMobileSidebar);

  const { data: boards } = API.useGetBoardsQuery();

  return (
    isLoggdIn && (
      <Box sx={{ display: 'flex', overflowX: 'hidden' }}>
        <AppBar
          position="fixed"
          sx={{
            width: { 1440: `calc(100% - ${SIDEBARWIDTH}px)` },
            height: { 768: 68 },
            ml: { 1440: `${SIDEBARWIDTH}px` },
            boxShadow: 'none',
            backgroundColor: '#161616',
          }}
        >
          <Header handleSidebarToggle={handleSidebarToggle} />
        </AppBar>

        <Sidebar
          isMobileSidebar={isMobileSidebar}
          handleSidebarToggle={handleSidebarToggle}
        />

        {boards?.length === 0 ? <DefaultScreenPage /> : <Outlet />}
      </Box>
    )
  );
};

export default HomePage;
