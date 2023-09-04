import { Modal, Box, Typography } from '@mui/material';
import sprite from '../../assets/images/sprite.svg';
import { ButtonClose } from 'components/ModalBoard/ModalBoard.styled';

// import { useState } from 'react';

const modalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: 2,
  border: '1px solid rgba(190, 219, 176, 0.50)',
  background: 'var(--modal-bg-color)',
  padding: 3,
  fontFamily: 'Poppins',
};

const titleStyles = {
  color: 'var(--primary-text-color)',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 500,
  fontFamily: 'Poppins',
  lineHeight: 'normal',
  letterSpacing: -0.36,
  marginBottom: 3,
};

const ModalLayout = ({ title, open, handleClose, children }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyles}>
          <Typography variant="h2" sx={titleStyles}>
            {title}
          </Typography>
          <ButtonClose type="button" onClick={handleClose}>
            <svg
              style={{ stroke: 'var(--primary-text-color)' }}
              width="18"
              height="18"
            >
              <use href={sprite + '#icon-x-close'} />
            </svg>
          </ButtonClose>
          {children}
        </Box>
      </Modal>
    </>
  );
};

export default ModalLayout;
