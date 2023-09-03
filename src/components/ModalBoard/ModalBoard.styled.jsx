import styled from '@emotion/styled';

export const ButtonClose = styled.button`
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
  color: rgba(255, 255, 255, 0.5);

  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid #ffffff;
    color: rgba(255, 255, 255, 1);
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

export const InputStyled = styled.input`
  resize: none;
  color: #ffffff;
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
    color: #ffffff;
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
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 14px;
  width: 260px;
`;

export const LiStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 14px;

  &:hover,
  &:focus {
    border-radius: 5px;
    background-color: #bedbb0;
  }
`;

export const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
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
