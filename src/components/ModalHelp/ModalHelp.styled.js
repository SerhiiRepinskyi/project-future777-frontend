import styled from '@emotion/styled';
import { styled as MUI } from '@mui/material/styles';

export const FormStyled = MUI('form')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '0px',
  overflow: 'hidden',
   resize: 'block !important', 
});

const inputStyles = `
  width: 100%;
  padding: 14px 18px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 100%;
  line-height: 21px;
  letter-spacing: -0.28px;
  border-radius: 8px;
  color:var(--primary-text-color);
  border: 1px solid var(--input-border-color);
  opacity: 0.6;
  background-color: var(--bcg-modal-color);
  transition: border-color 0.3s ease;
  outline: none;
  caret-color: var(--caret-color)
  resize: block; 

  &::placeholder {
    color: var(--primary-text-color);
    font-size: 14px;
    line-height: 21px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    -webkit-text-fill-color: var(--primary-text-color);
    opacity: 1;
  
  }
  &:active {
    background-color: var(--modal-bg-color);
    border: 1px solid var(--button-bg-color-hover);
    outline:none;
  }
`;

export const InputStyled = styled.input`
  ${inputStyles}
   ${({ hasError }) => (hasError ? ErrorText : '')};
  
`;

export const TextareaStyled = styled.textarea`
  ${inputStyles}
  min-height: 155px;
  text-align: top;
  resize: block; 
  margin-top: 14px;
  margin-bottom: 14px;
    resize: none;
  
`;

export const ErrorText = styled.div`
  color: var(--primary-text-color);
  font-size: 12px;
  margin-top: 2px;
 
`;
