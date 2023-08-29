import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const slideToRight = keyframes`
  0% {transform: translateX(-250px)}
  100% {transform: translateX(0px)}
`;

const slideToLeft = keyframes`
  0% {transform: translateX(250px)}
  100% {transform: translateX(0px)}
`;

const slideToDown = keyframes`
  0% {transform: translateY(-250px)}
  100% {transform: translateY(0px)}
`;

export const Subtitle = styled('p')(({ isSidebarShown }) => ({
  margin: '0px',
  color: 'rgba(255, 255, 255, 0.5)',
  fontFamily: 'Poppins',
  fontSize: '12px',
  fontWeight: 400,
  letterSpacing: '-0.24px',

  transform: 'translateX(250px)',
  animation: isSidebarShown ? `${slideToLeft} 300ms` : 'none',
  animationTimingFunction: 'ease',

  animationFillMode: 'forwards',
}));

export const CreateBoardWrap = styled('div')({
  paddingBottom: '14px',
  paddingTop: '14px',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
});

export const TitleCreate = styled('p')(({ isSidebarShown }) => ({
  margin: '0px',
  color: '#ffffff',
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '-0.28px',

  transform: 'translateX(-250px)',
  animation: isSidebarShown ? `${slideToRight} 300ms` : 'none',
  animationTimingFunction: 'ease',

  animationFillMode: 'forwards',
}));

export const DivideLine = styled('div')({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  width: '100%',
  minHeight: '1px',
  height: '1px',
});

export const HelpBox = styled('div')({
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'left',
  backgroundColor: '#1f1f1f',
  overflow: 'hidden',
});

export const Image = styled('img')(({ isSidebarShown }) => ({
  width: '54px',
  height: '78px',
  marginBottom: '14px',

  transform: 'translateY(250px)',
  animation: isSidebarShown ? `${slideToDown} 300ms` : 'none',
  animationTimingFunction: 'ease',

  animationFillMode: 'forwards',
}));

export const HelpText = styled('p')(({ isSidebarShown }) => ({
  margin: '0px',
  color: '#ffffff',
  fontFamily: 'Poppins',
  fontWeight: 400,
  letterSpacing: -0.15,
  '& span': {
    color: '#bedbb0',
  },

  transform: 'translateX(-250px)',
  animation: isSidebarShown ? `${slideToRight} 300ms` : 'none',
  animationTimingFunction: 'ease',

  animationFillMode: 'forwards',
}));

export const HelpButton = styled('button')(({ isSidebarShown }) => ({
  padding: 0,
  width: '94px',
  height: '20px',
  display: 'flex',
  gap: '8px',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#ffffff',
  backgroundColor: 'transparent',
  fontFamily: 'Poppins',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: 1.5,
  letterSpacing: '-0.24px',
  border: 'none',
  cursor: 'pointer',
  '&:hover, &:focus': {
    textDecoration: 'underline',
    outline: 'none',
  },

  transform: 'translateX(250px)',
  animation: isSidebarShown ? `${slideToLeft} 300ms` : 'none',
  animationTimingFunction: 'ease',
  animationFillMode: 'forwards',
}));
