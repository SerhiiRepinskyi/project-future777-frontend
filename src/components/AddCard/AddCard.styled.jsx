import styled from '@emotion/styled';

export const ComponentWrapper = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 14px;
  margin-bottom: 0px;
`;

export const InputStyled = styled.input`
  resize: none;
  color: var(--primary-text-color);
  padding: 14px 14px;
  background-color: transparent;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  :focus {
    border: 2px solid #bedbb0;
    outline: none;
  }
  ::placeholder {
    color: var(--primary-text-color);
    opacity: 30%;
  }
`;

export const TextareaStyled = styled.textarea`
  display: flex;
  min-height: 155px;
  color: var(--primary-text-color);
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
    color: var(--primary-text-color);
    opacity: 30%;
  }
`;

export const LabelColorBox = styled.div`
  display: flex;
  gap: 4px;
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
  color: var(--default-screen-page-link-color);
  font-size: 14px;
  margin: 0;
`;

export const SubTitle = styled.p`
  color: var(--primary-text-color);
  font-size: 12px;
  opacity: 50%;
  margin: 0;
`;
