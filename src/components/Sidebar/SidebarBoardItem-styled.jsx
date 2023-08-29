import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

export const BoardItemWrap = styled('div')({
  paddingTop: '20px',
  paddingBottom: '20px',

  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  justifyContent: 'space-between',
  alignItems: 'center',

  overflow: 'hidden',
});

export const BoardItemIcon = styled('svg')({
  width: '18px',
  height: '18px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  stroke: '#ffffff',
});

export const BoardItemCurrentIcon = styled('svg')({
  width: '16px',
  height: '16px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  stroke: '#ffffff',
});

export const BoardItemTitleWrap = styled('div')({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const BoardItemTitle = styled('p')(
  ({ titleWidth, titleWrapWidth, current }) => {
    const slideText = keyframes`
    0% { transform: translateX(0px); }
    100% { transform: translateX(${titleWrapWidth - titleWidth}px); }
  `;

    return {
      margin: '0px',
      color: '#ffffff',
      fontFamily: 'Poppins',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      letterSpacing: '-0.28px',

      animationName: titleWidth >= titleWrapWidth && current ? slideText : 'none',
      animationDuration: `${titleWidth * 30}ms`,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
    };
  }
);
