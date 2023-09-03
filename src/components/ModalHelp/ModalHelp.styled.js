import styled from '@emotion/styled';

export const ComponentWrapper = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  font-family: Poppins;
  
`;
export const Box = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  font-family: Poppins;
  
`;


export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  
`;

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
  border: 1px solid var(--button-bg-color-hover);
  background-color: transparent;
  transition: border-color 0.3s ease; 
    &::placeholder {
    color: --secondary-text-color;
    font-size: 14px;
    line-height: 21px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }
  &:-webkit-autofill {
    background-color: transparent !important;
    border: 1px solid var(--button-bg-color);
    
  }

  &:focus {
   background-color: transparent !important;
  -webkit-text-fill-color: var(--primary-text-color);
    border: 1px outset var(--button-bg-color);
  }

  &:active {
   background-color: transparent !important;
    border: 1px outset var(--button-bg-color);
     font-size: 14px;
    line-height: 21px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }
`;

export const InputStyled = styled.input`
  ${inputStyles}

  
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

