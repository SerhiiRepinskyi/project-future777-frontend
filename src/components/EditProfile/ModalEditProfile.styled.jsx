import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 12000;
`;
export const ModalContent = styled.div`
  position: relative;
  width:100%;
  margin-left:auto;
  margin-right: auto;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  padding:24px;
  border-radius: 8px;
  background: var( --modal-bg-color);
  @media (min-width: 375px) {
    // max-width: 287px;
    max-width: 335px;
  }
  @media (min-width: 768px) {
    // max-width: 352px;
    max-width: 400px;
  }
  }
  
`;

export const Btn = styled.button`
  position: absolute;
  top: 13px;
  right: 10px;
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3 ease;
  &:hover,
  &:focus {
    svg {
      transform: scale(1.2);
    }
  }
`;

export const IconClose = styled.svg`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  stroke: var(--primary-text-color);
`;
