import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  //   min-height: 100%;
  height: 100vh;
  padding: 20px;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background: #151515;
  @media screen and (min-width: 375px) {
    max-width: 335px;
  }
  @media screen and (min-width: 768px) {
    max-width: 424px;
    padding: 40px;
  }
`;
export const Navigation = styled.nav`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;
export const StyledLink = styled(NavLink)`
  display: inline-block;
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  text-decoration: none;
  &.active {
    color: #fff;
  }
`;

export const FormikForm = styled(Form)`
  width: 100%;
  display: flex;
  gap: 14px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  display: block;
  width: 100%;
`;
export const FormikInput = styled(Field)`
  width: 100%;
  padding: 14px 18px;
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
  transition: all 0.3s ease;

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
    caret-color: #fff; !important;
  
  opacity: 0.4;
  border: 1px solid rgba(190, 219, 176, 1);
  }
   &:-webkit-autofill:active {
    box-shadow: none;
    background-color: #151515;
    // opacity: 1;
     -webkit-text-fill-color: #fff;!important;
     caret-color: #fff; !important;
  }

  &:focus {
    opacity: 1;
    outline: none;
    
  }
 

`;
export const Wrap = styled.div`
  display: block;
  position: relative;
`;
export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: #fff;
  fill: none;
  display: block;
`;
export const IconBtn = styled(({ active, ...rest }) => <button {...rest} />)`
  position: absolute;
  right: 12px;
  top: 50%;
  background-color: transparent;
  border: none;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.4;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }
  ${props =>
    props.active &&
    css`
      opacity: 1;
      svg {
        stroke: rgba(190, 219, 176, 1);
      }
    `}
`;

export const Button = styled.button`
  color: #161616;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  padding: 14px 0;
  -webkit-tap-highlight-color: transparent;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-top: 10px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: #9DC888;
    transition: all 0.3s ease;
   outline: none;
     cursor: pointer;
  &:disabled {
     background: #bedbb0;
    cursor: not-allowed;
    &:focus {
       -webkit-tap-highlight-color: none;
       
    }
`;
// export const Error = styled(ErrorMessage)`
//   font-family: 'Roboto';
//   opacity: 0.5;
//   color: #fff;
//   font-size: 14px;
//   margin-top: 5px;
//   padding-left: 5px;
//   max-width: 200px;
// `;
