import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

// Кнопка для модалок с иконкой
export const ButtonWithIcon = ({ title, onClick, type }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant="contained"
      disableElevation
      sx={{
        display: 'flex',
        color: '#161616',
        fontFamily: 'Poppins, sans-serif',
        alignItems: 'center',
        textTransform: 'none',
        borderRadius: '8px',
        marginTop: '40px',
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
      startIcon={
        <AddIcon
          sx={{ background: '#161616', borderRadius: '6px', color: 'white' }}
        />
      }
    >
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
        marginTop: '40px',
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
export const ButtonsAdd = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      disableElevation
      sx={{
        display: 'flex',
        color: '#FFFFFF',
        fontFamily: 'Poppins, sans-serif',
        alignItems: 'center',
        textTransform: 'none',
        borderRadius: '8px',
        marginTop: '40px',
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
      startIcon={
        <AddIcon
          sx={{ background: '#FFFFFF', borderRadius: '6px', color: '#121212' }}
        />
      }
    >
      Add another column
    </Button>
  );
};

//Кнопка для Sidebar
export const ButtonSidebar = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        width: '40px',
        height: '36px',
        color: '#161616',
        fontFamily: 'Poppins, sans-serif',
        borderRadius: '6px',
        background: '#BEDBB0',
        fontSize: '14px',
        background: '#BEDBB0',
        lineHeight: '21px',
        fontWeight: '500',
        fontStyle: 'normal',
        '&:hover': {
          background: '#9DC888',
        },
      }}
    >
      <AddIcon
        sx={{
          color: 'black',
          width: '20px',
          height: '20px',
        }}
      />
    </IconButton>
  );
};
