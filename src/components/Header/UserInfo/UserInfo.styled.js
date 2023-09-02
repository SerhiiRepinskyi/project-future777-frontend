import styled from '@emotion/styled';

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const UserName = styled.p`
    margin-right: 8px;
    color: var(--primary-text-color);
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