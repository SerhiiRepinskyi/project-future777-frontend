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
  border: 1px solid var(--button-bg-color-hover);
  background-color: var(--modal-bg-color);
  transition: border-color 0.3s ease;

  &::placeholder {
    color: var(--secondary-text-color) !important;
    outline:none;
  }

  &:-webkit-autofill:active,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:hover {
    color: var(--modal-bg-color) !important;
    background-color: var(--modal-bg-color) !important;
    border: 1px solid var(--button-bg-color);
    outline:none;
  }

  &:focus {
    background-color: var(--modal-bg-color) !important;
    -webkit-text-fill-color: var(--primary-text-color);
    border: 1px solid var(--button-bg-color);
    outline:none;
  }

  &:active {
    background-color: var(--modal-bg-color);
    border: 1px solid var(--button-bg-color);
    font-size: 14px;
    line-height: 21px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
    outline:none;
  }
`;

export const InputStyled = styled.input`
  ${inputStyles}
`;

export const TextareaStyled = styled.textarea`
  ${inputStyles}
  min-height: 155px;
  text-align: top;
`;

export const LabelColorBox = styled.div`
  display: flex;
  gap: 4px;
`;
