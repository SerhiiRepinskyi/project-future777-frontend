import { EmptyAvatar, UserInfoContainer, UserName } from './UserInfo.styled';

export const UserInfo = ({ name = 'User', avatarURL }) => {
  return (
    <UserInfoContainer>
      <UserName>{name}</UserName>
      <div>
        {avatarURL ? (
          <img src={avatarURL} alt="User Avatar" />
        ) : (
          <EmptyAvatar />
        )}
      </div>
    </UserInfoContainer>
  );
};
