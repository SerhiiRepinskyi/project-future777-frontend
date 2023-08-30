import { Popover } from '@mui/material';
import React from 'react';

const PopupStyles = {
  '.MuiPaper-root': {
    backgroundColor: '#1F1F1F',
    borderRadius: '8px',
  },
};

const Popup = ({ anchorEl, open, onClose, children }) => {
  return (
    <Popover
      sx={PopupStyles}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      {children}
    </Popover>
  );
};

export default Popup;
