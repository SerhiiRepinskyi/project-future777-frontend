import React, { useState } from 'react';
import { Typography, Toolbar, Box, IconButton } from '@mui/material';
import { SIDEBARWIDTH } from 'components/Sidebar/SidebarCONSTANTS';
import { ButtonAdd } from 'components/Buttons/Button';
import ModalLayout from '../../components/ModalLayout/ModalLayout'
import AddColumn from 'components/AddColumn/AddColumn';
import sprite from '../../assets/images/sprite.svg';

const ScreensPage = () => {
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);

  const openAddColumn = () => setIsAddColumnOpen(true);
  const closeAddColumn = () => setIsAddColumnOpen(false);

  return (
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
         <ButtonAdd onClick={openAddColumn}></ButtonAdd>
        {/* Використовуйте відповідний компонент ModalLayout з дочірнім елементом AddColumn */}
        <ModalLayout open={isAddColumnOpen} handleClose={closeAddColumn}>
          <AddColumn />
        </ModalLayout>
      </Box>
  );
};

export default ScreensPage;
