import { Modal, Box, Typography } from '@mui/material';
import sprite from '../../src/assets/images/sprite.svg';
import { ButtonClose } from './ModalBoard/ModalBoard.styled';
// import { useState } from 'react';

const ModalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  borderRadius: 8 / 4,
  border: '1px solid rgba(190, 219, 176, 0.50)',
  background: '#151515',
  padding: 14 / 8,
};

const titleStyles = {
  color: '#FFF',
  fontSize: 18,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: -0.36,
  marginBottom: 24 / 8,
};

const ModalLayout = ({ title, open, handleClose, children }) => {
  //   const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyles}>
          <Typography variant="h2" sx={titleStyles}>
            {title}
          </Typography>
          <ButtonClose type="button" onClick={handleClose}>
            <svg stroke="#BEDBB0" width="18" height="18">
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
