import { Popover } from '@mui/material';
import React from 'react';

const Popup = ({ anchorEl, open, onClose, children }) => {
  return (
    <Popover
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
