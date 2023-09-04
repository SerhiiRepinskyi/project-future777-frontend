import { useState } from 'react';
import { ModalEditProfile } from 'components/EditProfile/ModalEditProfile';
import {
  EmptyAvatar,
  ImgAvatar,
  UserInfoContainer,
  UserName,
} from './UserInfo.styled';

export const UserInfo = ({ name = 'User', avatarURL }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <UserInfoContainer onClick={() => setIsOpen(true)}>
      <UserName>{name}</UserName>
      <div>
        {avatarURL ? (
          <ImgAvatar src={avatarURL} alt="User Avatar" />
        ) : (
          <EmptyAvatar />
        )}
      </div>
      {isOpen && (
        <ModalEditProfile onClose={handleCloseModal}></ModalEditProfile>
      )}
    </UserInfoContainer>
  );
};
