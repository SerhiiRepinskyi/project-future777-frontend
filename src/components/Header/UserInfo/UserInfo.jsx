import { EmptyAvatar, ImgAvatar, UserInfoContainer, UserName } from './UserInfo.styled';

export const UserInfo = ({ name = 'User', avatarURL }) => {
  return (
    <UserInfoContainer>
      <UserName>{name}</UserName>
      <div>
        {avatarURL ? (
          <ImgAvatar src={avatarURL} alt="User Avatar" />
        ) : (
          <EmptyAvatar />
        )}
      </div>
    </UserInfoContainer>
  );
};
