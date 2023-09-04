import styled from '@emotion/styled';
import { styled as MUI } from '@mui/material/styles';

export const FormStyled = MUI('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
});

export const ButtonClose = styled.button`
  font-family: Poppins;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.2);
    /* border: 1px solid #ffffff;
    color: rgba(255, 255, 255, 1); */
  }
`;

export const InputStyled = styled.input`
  font-family: Poppins;
  resize: none;
  color: var(--primary-text-color);
  padding: 14px 14px;
  background-color: transparent;
  border: 1px solid rgba(190, 219, 176, 0.4);
  border-radius: 8px;
  margin-bottom: 10px;
  :focus {
    border: 1px solid #bedbb0;
    outline: none;
  }
  ::placeholder {
    color: var(--primary-text-color);
    opacity: 30%;
  }
`;

export const TransparentSVG = styled.svg`
  width: 18px;
  height: 18px;
  // stroke: rgba(255, 255, 255, 0.5);
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: #bedbb0;
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 14px;
`;

export const UlBgStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 14px;
  max-width: 260px;
`;

export const LiStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 5px;

  &:hover,
  &:focus {
    border: 1px solid #bedbb0;
  }
`;

export const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`;

export const LiIconsStyled = styled.li`
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    border-radius: 5px;
    background-color: rgba(190, 219, 176, 0.2);
  }
`;
