import styled from '@emotion/styled';
import { SIDEBARWIDTH } from 'components/Sidebar/SidebarCONSTANTS';


export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: var(--primary-bg-color);
  height: 100vh;
  padding-top: 78px;
  padding-left: 24px;
  padding-right: 24px;
  @media screen and (min-width: 0px) {
    width: 100vw;
  }
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1400px) {
    width: calc(100vw - ${SIDEBARWIDTH}px);
  }
`;

export const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  align-items: top;

  ::-webkit-scrollbar {
    border-radius: 5px;
    margin-left: 4px;
    height: 8px;
    background-color: var(--screen-page-scrollbar-bg-color);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--screen-page-scrollbar-thumb-color);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--screen-page-scrollbar-thumb-color-HOVER);
  }
  
  @media screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: ${props => {
      return `repeat(${props.cols}, 334px)`;
    }};
    overflow-x: ${props => {
      if (props.cols < 3) {
        return `hidden`;
      }
      return `scroll`;
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
  height: '100vh',
  width: { 0: '100vw', 1440: `calc(100vw - ${SIDEBARWIDTH}px)` },
  flexGrow: 1,

  backgroundColor: 'var(--primary-bg-color)',
};

