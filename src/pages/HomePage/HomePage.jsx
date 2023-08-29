import { AppBar, Box } from '@mui/material';

import { useState } from 'react';
import { SIDEBARWIDTH } from 'components/Sidebar/SidebarCONSTANTS';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Header } from 'components/Header/Header';
import ScreensPage from 'pages/ScreensPage';

const HomePage = () => {
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);
  const handleSidebarToggle = () => setIsMobileSidebar(!isMobileSidebar);

  return (
    <Box sx={{ display: 'flex' }}>
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

      <ScreensPage />
    </Box>
  );
};

export default HomePage;
