import React, { useState } from 'react';
import { Typography, Toolbar, AppBar, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { SIDEBARWIDTH } from 'components/Sidebar/SidebarCONSTANTS';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { ButtonAdd } from 'components/Buttons/Button';
import AddColumnModal from 'components/AddColumn/AddColumnModal';
import sprite from '../../assets/images/sprite.svg';

const ScreensPage = () => {
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);
  const [isAddColumnModalOpen, setIsAddColumnModalOpen] = useState(false);

  const handleSidebarToggle = () => setIsMobileSidebar(!isMobileSidebar);
  const openAddColumnModal = () => setIsAddColumnModalOpen(true);
  const closeAddColumnModal = () => setIsAddColumnModalOpen(false);

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
        <Toolbar sx={{ minHeight: 60, pl: 4, pr: 4 }}>
          <IconButton
            color="inherit"
            aria-label="open sidebar options"
            edge="start"
            onClick={handleSidebarToggle}
            sx={{ width: 32, height: 32, display: { 1440: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
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
        <Typography paragraph sx={{
          color: '#ffffff',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: '16px', }}>
          BoardName
        </Typography>
<IconButton
  sx={{
    position: 'absolute',
    top: '70px',
    right: '40px',
    zIndex: 1,
    color: '#ffffff',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '21px',
    letterSpacing: '-2%',
  }}
>
  <svg
    stroke="#fff"
    strokeOpacity="1"
    width="18"
    height="18"
    style={{ verticalAlign: 'middle', marginRight: '8px' }}
  >
    <use href={sprite + '#icon-filter'} />
  </svg>
  Filter
</IconButton>
        <ButtonAdd onClick={openAddColumnModal}></ButtonAdd>
        <AddColumnModal isOpen={isAddColumnModalOpen} onClose={closeAddColumnModal} />
      </Box>
    </Box>
  );
};

export default ScreensPage;
