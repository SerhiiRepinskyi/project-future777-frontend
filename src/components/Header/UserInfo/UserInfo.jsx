import { useState } from 'react';
import { ModalEditProfile } from 'components/ModalEditProfile/ModalEditProfile';
import {
  EmptyAvatar,
  ImgAvatar,
  UserInfoContainer,
  UserName,
} from './UserInfo.styled';

export const UserInfo = ({ name = 'User', avatarURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalStateChange = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <UserInfoContainer onClick={modalStateChange}>
        <UserName>{name}</UserName>
        <div>
          {avatarURL ? (
            <ImgAvatar src={avatarURL} alt="User Avatar" />
          ) : (
            <EmptyAvatar />
          )}
        </div>
      </UserInfoContainer>

      <ModalEditProfile
        title={'Edit  profile'}
        open={isModalOpen}
        handleClose={modalStateChange}
      />
    </>
  );
};
