import styled, { css } from 'styled-components';
import { styled as MUI } from '@mui/material/styles';
import { Form, Field } from 'formik';

export const Container = MUI('div')({
  backgroundColor: 'var(--input-bcg-color)',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: '8px',
});

export const FormWrap = styled.div`
  background-color: var(--modal-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  min-width: 100%;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;
export const ImgWrapper = styled.div`
  position: relative;
  width: 68px;
  height: 68px;
  border-radius: 8px;
  transition: all 0.3s ease;
`;
export const IconAvatar = styled.svg`
  width: 68px;
  height: 68px;
  --color1: var(--avatar-bcg-color);
  --color2: var(--avatar-fill-color);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
export const IconButton = styled.button`
  border: none;
  border-radius: 6px;
  cursor: pointer;
  position: absolute;
  top: 101%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background-color: var(--icon-plus-bcg);
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    outline: none;
  }

  &:focus {
    background-color: var(--icon-plus-bcg-hover-focus);
    outline: none;
  }
`;
export const IconPlus = styled.svg`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  stroke: var(--icon-add-avatar);
  // stroke: var(--icon-add-color);

  ${IconButton}:hover & {
    transform: translate(-50%, -50%) scale(1.1);
  }

  ${IconButton}:focus & {
    opacity: 1;
    outline: none;
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

  color: var(--primary-text-color);
  border-radius: 8px;
  opacity: 0.4;
  border: 1px solid var(--input-border-color);

  background: var(--bcg-modal-color);
  transition: all 0.3s ease;

  &::placeholder {
    color: var(--primary-text-color);
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
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
  stroke: var(--primary-text-color);
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
  & svg {
    stroke: var(--primary-text-color);
  }

  &:focus {
    outline: none;
  }
  ${props =>
    props.active &&
    css`
      opacity: 1;
      svg {
        stroke: var(--input-border-color);
      }
    `}
`;

// export const Button = styled.button`
//   color: var(--btn-text-color);
//   text-align: center;
//   font-family: Poppins;
//   font-size: 14px;
//   padding: 14px 0;
//   -webkit-tap-highlight-color: transparent;
//   font-weight: 500;
//   line-height: normal;
//   letter-spacing: -0.28px;
//   font-size: 14px;
//   font-weight: 500;
//   letter-spacing: -0.28px;
//   margin-top: 10px;
//   width: 100%;
//   border: none;
//   border-radius: 8px;
//   background: var(--input-border-color);
//   opacity: 1;
//   outline: none;
//   cursor: pointer;

//   &:disabled {
//     // opacity: 0.6;
//     //  background: var(--input-border-color);
//     cursor: not-allowed;
//   }
//   &:focus {
//     opacity: 1;
//     -webkit-tap-highlight-color: none;
//   }
// `;

// export const Error = styled(ErrorMessage)`
//   font-family: 'Roboto';
//   opacity: 0.5;
//   color: var(--secondary-text-color);
//   font-size: 14px;
//   margin-top: 5px;
//   padding-left: 5px;
//   max-width: 200px;
// `;
