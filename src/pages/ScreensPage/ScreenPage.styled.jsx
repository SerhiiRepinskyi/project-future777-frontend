import styled from '@emotion/styled';
import { SIDEBARWIDTH } from 'components/Sidebar/SidebarCONSTANTS';
import bgData from './bg-data.json';

export const MainWrapper = styled.main`
  min-height: 100%;
  background-color: var(--primary-bg-color);
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 18px;
  @media screen and (min-width: 0px) {
    min-height: 100vh;
    @media (-webkit-min-device-pixel-ratio: 1) {
      background-image: ${props => {
        if (props.index === undefined) {
          return 'none';
        }
        return `url(${bgData[2].mobile[0][props.index]})`;
      }};
    }
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: ${props => {
        if (props.index === undefined) {
          return 'none';
        }
        return `url(${bgData[2].mobile[1][props.index]})`;
      }};
    }
    @media (-webkit-min-device-pixel-ratio: 3) {
      background-image: ${props => {
        if (props.index === undefined) {
          return 'none';
        }
        return `url(${bgData[2].mobile[2][props.index]})`;
      }};
    }
  }

  @media screen and (min-width: 1400px) {
    height: 100vh;
    @media (-webkit-min-device-pixel-ratio: 1) {
      background-image: ${props => {
        if (props.index === undefined) {
          return 'none';
        }
        return `url(${bgData[0].desktop[0][props.index]})`;
      }};
    }
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: ${props => {
        if (props.index === undefined) {
          return 'none';
        }
        return `url(${bgData[0].desktop[1][props.index]})`;
      }};
    }
    @media (-webkit-min-device-pixel-ratio: 3) {
      background-image: ${props => {
        if (props.index === undefined) {
          return 'none';
        }
        return `url(${bgData[0].desktop[2][props.index]})`;
      }};
    }
  }

  @media screen and (min-width: 767px) {
    height: 100vh;
    @media (-webkit-min-device-pixel-ratio: 1) {
      background-image: ${props => {
        if (props.index === undefined) {
          return 'none';
        }
        return `url(${bgData[1].laptop[0][props.index]})`;
      }};
    }
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: ${props => {
        if (props.index === undefined) {
          return 'none';
        }
        return `url(${bgData[1].laptop[1][props.index]})`;
      }};
    }
    @media (-webkit-min-device-pixel-ratio: 3) {
      background-image: ${props => {
        if (props.index === undefined) {
          return 'none';
        }
        return `url(${bgData[1].laptop[2][props.index]})`;
      }};
    }
  }

  @media screen and (min-width: 1400px) {
    height: 100vh;
    @media (-webkit-min-device-pixel-ratio: 1) {
      background-image: ${props => {
        if (props.index === undefined) {
          return 'none';
        }
        return `url(${bgData[0].desktop[0][props.index]})`;
      }};
    }
    @media (-webkit-min-device-pixel-ratio: 2) {
      background-image: ${props => {
        if (props.index === undefined) {
          return 'none';
        }
        return `url(${bgData[0].desktop[1][props.index]})`;
      }};
    }
    @media (-webkit-min-device-pixel-ratio: 3) {
      background-image: ${props => {
        if (props.index === undefined) {
          return 'none';
        }
        return `url(${bgData[0].desktop[2][props.index]})`;
      }};
    }

    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  height: 100vh;
  padding-top: 78px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 28px;
  margin-bottom: 28px;
  @media screen and (min-width: 0px) {
    width: 100vw;
    height: 100%;
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
  overflow: hidden;
  margin-bottom: auto;
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
    margin-bottom: auto;
    grid-template-columns: ${props => {
      return `repeat(${props.cols}, 334px)`;
    }};
    overflow-x: ${props => {
      if (props.cols > 3) {
        return 'scroll';
      }
      return 'hidden';
    }};
  }

  @media screen and (min-width: 1400px) {
    display: grid;
    margin-bottom: auto;

    overflow-x: ${props => {
      if (props.cols > 4) {
        return 'scroll';
      }
      return 'hidden';
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
