import styled from '@emotion/styled';
import { styled as MUI } from '@mui/material/styles';

export const FormStyled = MUI('form')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '0px',
  overflow: 'hidden',
});

const inputStyles = `
  width: 100%;
  padding: 14px 18px;
  margin-bottom: 14px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.28px;
  caret-color: white;
  border-radius: 8px;
  color:var(--primary-text-color);
  border: 1px solid var(--input-border-color);
  // background-color: var(--modal-bg-color);
    opacity: 0.4;
  background-color: var(--bcg-modal-color);
  transition: border-color 0.3s ease;
  outline: none;

  &::placeholder {
     color: var(--primary-text-color);
    // color: var(--secondary-text-color) !important;
    font-size: 14px;
    line-height: 21px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:-webkit-autofill:active,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:hover {
    box-shadow: 0 0 0px 1000px var(--modal-bg-color) inset;
    color: var(--modal-bg-color) !important;
    background-color: var(--modal-bg-color) !important;
    border: 1px solid var(--button-bg-color);
  }

  &:focus {
    // background-color: var(--modal-bg-color) !important;
    -webkit-text-fill-color: var(--primary-text-color);
    // border: 1px outset var(--button-bg-color);
      opacity: 1;
  }

  &:active {
    -webkit-text-fill-color: var(--primary-text-color) !important;
    background-color: var(--modal-bg-color);
    border: 1px outset var(--button-bg-color);
    font-size: 14px;
    line-height: 21px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }
`;

export const InputStyled = styled.input`
  ${inputStyles}
  box-shadow: 0 0 0px 1000px var(--modal-bg-color) inset;
  &::placeholder {
    color: var(--secondary-text-color) !important;
    font-size: 14px;
    line-height: 21px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:-webkit-autofill:active,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:hover {
    background-color: var(--modal-bg-color) !important;
    border: 1px solid var(--button-bg-color);
  }
`;

export const TextareaStyled = styled.textarea`
  ${inputStyles}
  font-size: 14px;
  line-height: 21px !important;
  font-family: 'Poppins';
  letter-spacing: -0.28px !important;
  min-height: 155px;
  resize: none;
  text-align: top;
`;

export const LabelColorBox = styled.div`
  display: flex;
  gap: 4px;
`;
