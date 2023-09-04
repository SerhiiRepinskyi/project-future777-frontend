import styled from '@emotion/styled';
import { Field as FormicField } from 'formik';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2px;
`;
export const FormPopup = styled.form`
  background-color: var(--modal-bg-color);
  height: 275px;
  width: 200px;
  border-radius: 8px;
  padding: 24px;
`;

export const Button = styled.button`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.24px;
  text-decoration-line: underline;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  /* align-items: baseline; */
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 8px;
  cursor: pointer;
  color: var(--secondary-text-color);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.24px;
  padding-top: 1px;
  padding-bottom: 1px;
`;

export const Field = styled(FormicField)`
  width: 14px;
  height: 14px;
  background-color: transparent;

  display: grid;
  place-content: center;

  ::after {
    content: '';
    left: 6.4%;
    position: absolute;
    transform: translate(6px, 1px);
    width: 12px;
    height: 12px;
    border: 2.5px solid black;
    border-radius: 50%;
    opacity: 0;
  }
  ::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    transition: 120ms transform ease-in-out;
    background-color: ${props => props.color};
  }

  :checked::after {
    opacity: 1;
  }
`;

// export const Field = styled.div`
//   width: 14px;
//   height: 14px;
//   border-radius: 14px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);

//   background-color: ${props =>
//     props.color === 'without' && 'rgb(128, 128, 128)'};
//   background-color: ${props =>
//     props.color === 'low' && 'rgba(143, 161, 208, 1)'};
//   background-color: ${props =>
//     props.color === 'medium' && 'rgba(224, 156, 181, 1)'};
//   background-color: ${props =>
//     props.color === 'high' && 'rgba(190, 219, 176, 1)'};

//   transition: all 250ms linear;

//   &.active {
//     width: 6px;
//     height: 6px;
//   }
// `;

export const RadioWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
