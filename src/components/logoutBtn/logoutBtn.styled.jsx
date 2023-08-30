import styled from '@emotion/styled';

export const LogOutBtnStyled = styled.button`
  display: flex;
  gap: 14px;
  padding: 0px;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 105px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  color: var(--sidebar-icon-logout-color);
  &:hover,
  &:focus {
    color: var(--sidebar-icon-logout-color-HOVER-FOCUS);
  }
`;

export const SpanStyled = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--sidebar-primary-text-color);
  font-family: 'Poppins';
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Icon = styled.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: currentColor;
`;
