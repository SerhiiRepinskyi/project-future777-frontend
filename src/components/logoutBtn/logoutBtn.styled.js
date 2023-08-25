import styled from '@emotion/styled';

export const LogOutBtnStyled = styled.button`
  display: flex;
  gap: 14px;
  padding: 0px;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  height: 32px;
  width: 105px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #161616;
  font-family: 'Poppins, sans-serif';
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Icon = styled.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: #bedbb0;
  &:hover {
    stroke: #9dc888;
  }

  &:focus {
    stroke: #9dc888;
  }
`;
