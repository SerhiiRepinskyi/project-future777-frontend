import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const slideLigtning = keyframes`
  0% {transform: translateY(-25px)}

  20% {transform: translateY(0px)}
  80% {transform: translateY(0px)}

  100% {transform: translateY(25px)}
`;

const slideToRight = keyframes`
  0% {transform: translateX(-200px)}
  100% {transform: translateY(0px)}
`;

export const SidebarLogoIcon = styled('svg')({
  fill: 'var(--sidebar-icon-logo-color)',
  width: '12px',
  height: '16px',

  animation: `${slideLigtning} 6s infinite`,
  animationTimingFunction: 'ease',
});

export const SidebarLogoWrap = styled('div')(({ isSidebarShown }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
  width: '110px',

  transform: 'translateX(-135px)',
  animation: isSidebarShown ? `${slideToRight} 300ms` : 'none',
  animationTimingFunction: 'ease',

  animationFillMode: 'forwards',
}));

export const SidebarLogoIconWrap = styled('div')({
  width: '32px',
  height: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'var(--sidebar-icon-logo-bg-color)',
  borderRadius: '8px',
  overflow: 'hidden',
});

export const SidebarLogoText = styled('p')({
  margin: '0px',
  color: 'var(--sidebar-primary-text-color)',
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontWeight: 600,
  letterSpacing: '-0.64px',
});

export const StartPageLogoWrap = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '14px',
});

export const StartPageLogoIconWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#161616',
  borderRadius: '8px',
});

export const StartPageLogoIcon = styled('svg')({
  fill: '#ffffff',
});

export const StartPageLogoText = styled('p')({
  margin: '0px',
  color: '#161616',
  fontFamily: 'Poppins',
  fontWeight: 600,
  letterSpacing: '-0.64px',
});
