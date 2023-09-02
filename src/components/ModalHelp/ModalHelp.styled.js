import styled from '@emotion/styled';

export const ComponentWrapper = styled.div`
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

export const InputStyled = styled.input`
  width: 100%;
  padding: 14px 18px;
  margin-bottom:14px;
  font-family: Poppins;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;

  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  opacity: 0.4;
  border: 1px solid rgba(190, 219, 176, 1);

  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
 

  &::placeholder {
    color: #fff;
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }
    &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #1f1f1f inset !important;
    background-color: #1f1f1f !important;
    -webkit-text-fill-color: rgba(255, 255, 255, 1);
  
  opacity: 0.4;
  border: 1px solid rgba(190, 219, 176, 1);
  }
   &:-webkit-autofill:active {
    box-shadow: none;
    background-color: #151515;
    // opacity: 1;
     -webkit-text-fill-color: #fff;!important;
  }

  &:focus {
    opacity: 1;
    outline: none;
    }

`;

export const TextareaStyled = styled.textarea`
  display: flex;
  min-height: 155px;
   font-family: Poppins;
  font-size: 14px;
  line-height: normal;
  letter-spacing: -0.28px;
  color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  opacity: 0.4;
  border: 1px solid rgba(190, 219, 176, 1);
  resize: none;
  padding: 14px 14px;
  background-color: transparent;
  text-align: top;
  :focus {
    border: 2px solid #bedbb0;
    outline: none;
  }
  &::placeholder {
    color: #fff;
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }
   &:focus {
    opacity: 1;
    outline: none;
   
   &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px #1f1f1f inset !important;
    background-color: #1f1f1f !important;
    -webkit-text-fill-color: rgba(255, 255, 255, 1);
`;

export const LabelColorBox = styled.div`
  display: flex;
  gap: 4px;
`;
// export const TitleStyles = styled.p`   
//  color: #FFF;  
//   fontSize: 18;
//   fontStyle: 'normal';
//   fontWeight: 500;
//   lineHeight: 'normal';
//   letterSpacing: -0.36;
//   marginBottom: 24 / 8;
//    font-family: Poppins;`

