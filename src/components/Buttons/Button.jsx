import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export const ButtonWithIcon = ({ title }) => {
  return (
    <Button
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
        width: '334px',
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

export const ButtonWithoutIcon = ({ title }) => {
  return (
    <Button
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
        width: '334px',
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

export const ButtonsAdd = () => {
  return (
    <Button
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
