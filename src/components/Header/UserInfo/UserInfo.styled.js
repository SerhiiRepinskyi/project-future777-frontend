import styled from '@emotion/styled';

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--primary-text-color);
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
     color: var(--header-theme-color);
  }
`;

export const UserName = styled.p`
    margin-right: 8px;
    
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;
`;

export const EmptyAvatar = styled.div`
    width: 32px;
    height: 32px;
    background: var(--primary-text-color);
    border-radius: 8px;
`;

export const ImgAvatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 8px;
`;