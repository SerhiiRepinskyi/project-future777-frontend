import styled from "@emotion/styled";

export const ButtonClose = styled.button`
  position: absolute;
  right: 0;
  top: 14px;
  background-color: transparent;
  border: none;
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
  border: 1px solid #bedbb0;
  border-radius: 8px;
  margin-bottom: 10px;
  :focus {
    border: 2px solid #bedbb0;
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
  }`;

export const UlStyled = styled.ul`
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
   margin-bottom: 14px;
  }`;

  export const LiStyled = styled.li`
  display: block;
  width: 28px;
  height: 28px;
  }`;
