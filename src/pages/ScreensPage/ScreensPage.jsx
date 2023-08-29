import React, { useState } from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import { SIDEBARWIDTH } from 'components/Sidebar/SidebarCONSTANTS';
import { ButtonAdd } from 'components/Buttons/Button';
import ModalLayout from '../../components/ModalLayout/ModalLayout'
import AddColumn from 'components/AddColumn/AddColumn';
import sprite from '../../assets/images/sprite.svg';

import Column from '../../components/Column/Column';
import styled from '@emotion/styled';

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 334px 334px;
  gap: 34px;
  align-items: top;
`;

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
          1440: `calc(100vw - ${SIDEBARWIDTH}px)`,
          height: '100vh',
          backgroundColor: '#2e2e2e',
        },
        height: '100vh',
      }}
    >
      <Typography
        paragraph
        sx={{
          color: '#ffffff',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: '16px',
        }}
      >
        BoardName
      </Typography>
      <IconButton
        sx={{
          position: 'absolute',
          top: '94px',
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
      <ColumnsWrapper>
        <Column />
        <ButtonAdd onClick={openAddColumn}></ButtonAdd>
      </ColumnsWrapper>
      {/* Використовуйте відповідний компонент ModalLayout з дочірнім елементом AddColumn */}
      <ModalLayout open={isAddColumnOpen} handleClose={closeAddColumn}>
        <AddColumn />
      </ModalLayout>
    </Box>
  );
};

export default ScreensPage;
