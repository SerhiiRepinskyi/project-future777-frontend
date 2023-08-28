import styled from '@emotion/styled';


export const ComponentWrapper = styled.div`
 position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2e2e2e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  width:350px;
  height:250px;
  padding:24px;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
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

export const Title = styled.p`
display: 'flex';
fontFamily: 'Poppins';
gap: '8px';
alignItems: 'start';
textTransform: 'none';
borderRadius: '8px';
margin-top: '0px';
margin-bottom: 24px;
letterSpacing: '-0.02em';
fontSize: '18px';
lineHeight: '21px';
fontWeight: '500';
fontStyle: 'normal';
width: '108px';
height: '27px';
color: #ffffff;

`



