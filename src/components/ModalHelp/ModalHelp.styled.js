import styled from '@emotion/styled';

export const ComponentWrapper = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 0px;
`;

export const InputStyled = styled.input`
  resize: none;
  color: #ffffff;
  padding: 14px 14px;
  background-color: transparent;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  :focus {
    border: 2px solid #bedbb0;
    outline: none;
  }
  ::placeholder {
    color: #ffffff;
    opacity: 30%;
  }
`;

export const TextareaStyled = styled.textarea`
  display: flex;
  min-height: 155px;
  color: #ffffff;
  resize: none;
  padding: 14px 14px;
  background-color: transparent;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  text-align: top;
  :focus {
    border: 2px solid #bedbb0;
    outline: none;
  }
  ::placeholder {
    color: #ffffff;
    opacity: 30%;
  }
`;

export const LabelColorBox = styled.div`
  display: flex;
  gap: 4px;
`;
