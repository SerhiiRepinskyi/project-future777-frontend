import styled from '@emotion/styled';
import RadioButtonIcon from '@mui/material/Radio';

export const ComponentWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
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

export const RadioIcon = styled(RadioButtonIcon)`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #8fa1d0;
`;

export const RadioIconChecked = styled(RadioButtonIcon)`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: solid 2px #8fa1d0;
  background-color: none;
`;

export const SubWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 4px;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DateText = styled.p`
  color: #bedbb0;
  font-size: 14px;
  margin: 0;
`;

export const SubTitle = styled.p`
  color: #ffffff;
  font-size: 12px;
  opacity: 50%;
  margin: 0;
`;
