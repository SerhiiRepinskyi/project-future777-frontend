import { Typography, Toolbar, AppBar, Box } from '@mui/material';

import { useState } from 'react';
import { SIDEBARWIDTH } from 'components/Sidebar/SidebarCONSTANTS';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Header } from 'components/Header/Header';

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

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            1440: `calc(100% - ${SIDEBARWIDTH}px)`,
            height: '100vh',
            backgroundColor: '#2e2e2e',
          },
        }}
      >
        <Toolbar />
        <Typography paragraph sx={{ color: '#ffffff' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
