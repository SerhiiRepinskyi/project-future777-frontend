import { createPortal } from 'react-dom';
import Sprite from '../../assets/images/sprite.svg';
import { useCallback, useEffect } from 'react';
import {
  Backdrop,
  ModalContent,
  Btn,
  IconClose,
} from './ModalEditProfile.styled';
import { EditProfileContent } from './EditProfileContent';

const modalRoot = document.querySelector('#root');

export const ModalEditProfile = ({ onClose }) => {
  const handleButtonClick = () => {
    console.log('Close button clicked');
    onClose();
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      console.log('Backdrop clicked');
      onClose();
    }
  };
  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      const handleKeyDown = event => {
        if (event.code === 'Escape') {
          onClose();
        }
      };
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, onClose]);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <Btn onClick={handleButtonClick}>
          <IconClose aria-label="close">
            <use href={`${Sprite}#icon-x-close`}></use>
          </IconClose>
        </Btn>
        <EditProfileContent onClose={onClose} />
      </ModalContent>
    </Backdrop>,
    modalRoot
  );
};
