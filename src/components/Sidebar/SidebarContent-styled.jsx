import { styled } from '@mui/material/styles';

export const Subtitle = styled('p')({
  margin: '0px',
  color: 'rgba(255, 255, 255, 0.5)',
  fontFamily: 'Poppins',
  fontSize: '12px',
  fontWeight: 400,
  letterSpacing: '-0.24px',
});

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

export const TitleCreate = styled('p')({
  margin: '0px',
  color: '#ffffff',
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '-0.28px',
});

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
});

export const Image = styled('img')({
  width: '54px',
  height: '78px',
  marginBottom: '14px',
});

export const HelpText = styled('p')({
  margin: '0px',
  color: '#ffffff',
  fontFamily: 'Poppins',
  fontWeight: 400,
  letterSpacing: -0.15,
  '& span': {
    color: '#bedbb0',
  },
});

export const HelpButton = styled('button')({
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
});
