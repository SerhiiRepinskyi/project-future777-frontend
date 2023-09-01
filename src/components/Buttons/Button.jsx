import * as React from 'react';
import Button from '@mui/material/Button';

import { Box, IconButton } from '@mui/material';

import sprite from '../../assets/images/sprite.svg';

// Кнопка для модалок с иконкой
export const ButtonWithIcon = ({ title, onClick, type }) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant="contained"
      disableElevation
      sx={{
        display: 'flex',
        gap: '8px',
        color: '#161616',
        fontFamily: 'Poppins, sans-serif',
        alignItems: 'center',
        textTransform: 'none',
        borderRadius: '8px',
        letterSpacing: '-0.02em',
        fontSize: '14px',
        background: '#BEDBB0',
        lineHeight: '21px',
        fontWeight: '500',
        fontStyle: 'normal',
        width: '100%',
        height: '56px',
        '&:hover': {
          background: '#9DC888',
        },
      }}
    >
      <Box
        sx={{
          width: '28px',
          height: '28px',
          background: '#161616',
          borderRadius: '6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg width="14" height="14" stroke="#ffffff">
          <use href={sprite + '#icon-add'}></use>
        </svg>
      </Box>
      {title}
    </Button>
  );
};

// Кнопка для модалок без иконки
export const ButtonWithoutIcon = ({ title, onClick, type }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disableElevation
      sx={{
        display: 'flex',
        color: '#161616',
        fontFamily: 'Poppins, sans-serif',
        alignItems: 'center',
        textTransform: 'none',
        borderRadius: '8px',
        marginTop: '24px',
        letterSpacing: '-0.02em',
        fontSize: '14px',
        background: '#BEDBB0',
        lineHeight: '21px',
        fontWeight: '500',
        fontStyle: 'normal',
        width: '100%',
        height: '56px',
        '&:hover': {
          background: '#BEDBB0',
        },
      }}
    >
      {title}
    </Button>
  );
};

// Кнопка для добавления колонки
export const ButtonAdd = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      disableElevation
      sx={{
        display: 'flex',
        gap: '8px',
        color: '#FFFFFF',
        fontFamily: 'Poppins, sans-serif',
        alignItems: 'center',
        textTransform: 'none',
        borderRadius: '8px',
        letterSpacing: '-0.02em',
        fontSize: '14px',
        background: '#121212',
        lineHeight: '21px',
        fontWeight: '500',
        fontStyle: 'normal',
        width: '334px',
        height: '56px',
        '&:hover': {
          background: '#121212',
        },
      }}
    >
      <Box
        sx={{
          width: '28px',
          height: '28px',
          background: 'white',
          borderRadius: '6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg width="14" height="14" stroke="#121212">
          <use href={sprite + '#icon-add'}></use>
        </svg>
      </Box>
      Add another column
    </Button>
  );
};

//Кнопка для Sidebar
export const ButtonSidebar = ({ onClick }) => {
  return (
    <IconButton
      type="button"
      onClick={onClick}
      sx={{
        width: '40px',
        height: '36px',
        borderRadius: '6px',
        background: 'var(--sidebar-icon-plus-bg-color)',

        '&:hover, &:focus': {
          background: 'var(--sidebar-icon-plus-bg-color-HOVER-FOCUS)',
        },
      }}
    >
      <svg width="20" height="20" stroke="var(--sidebar-icon-plus-color)">
        <use href={sprite + '#icon-add'}></use>
      </svg>
    </IconButton>
  );
};

