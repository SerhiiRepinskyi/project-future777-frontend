import styled from '@emotion/styled';
import { SIDEBARWIDTH } from 'components/Sidebar/SidebarCONSTANTS';

export const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  align-items: top;

  ::-webkit-scrollbar {
    border-radius: 5px;
    margin-left: 4px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: #121212;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #9dc888;
  }
  @media screen and (min-width: 767px) {
    overflow-x: ${props => {
      if (props.cols < 2) {
        return `hidden`;
      }
      return `scroll`;
    }};
    display: grid;
    grid-template-columns: ${props => {
      return `repeat(${props.cols + 1}, 334px)`;
    }};
  }
  @media screen and (min-width: 1400px) {
    display: grid;
    overflow-x: ${props => {
      if (props.cols < 4) {
        return `hidden`;
      }
      return `scroll`;
    }};
  }
`;

export const screenSyles = {
  pt: { 0: 9.25, 768: 11, 1440: 9.75 },
  pb: { 0: 3, 768: 4, 1440: 1 },
  pl: { 0: 2.5, 768: 4, 1440: 3 },
  pr: { 0: 2.5, 768: 4, 1440: 3 },
  width: { 0: '100vw', 1440: `calc(100vw - ${SIDEBARWIDTH}px)` },
  flexGrow: 1,
  height: { 0: '100%', 768: '100vh', 1440: '100vh' },
  backgroundColor: 'var(--primary-bg-color)',
};
