import { styled } from '@mui/material/styles';

export const MemberList = styled('ul')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '16px',
  padding: '0px',
  width: '80vw',
  maxHeight: '80vh',
  overflowY: 'auto',
  marginBottom: '24px',
});

export const MemberLink = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
  

  '&:hover, &:focus': {

    

    '& svg': {
      color: 'var(--primary-text-color)',
      transform: 'scale(1.1)',
    },
  },
});

export const MemberItem = styled('li')({
  width: '150px',
  backgroundColor: 'var(--primary-bg-color)',
  borderRadius: '10px',
  textAlign: 'center',
  color: 'var(--secondary-text-color)',
  overflow: 'hidden',
});

export const MemberImage = styled('img')({
  width: '100%',
  height: '150px',
  display: 'block',
  objectFit: 'cover',
  borderTopRightRadius: '10px',
  borderTopLeftRadius: '10px',
});

export const MemberName = styled('p')({
  fontSize: '13px',
  color: 'var(--primary-text-color)',
  lineHeight: '1.16',
  textAlign: 'center',
  marginBottom: '3px',
});

export const MemberPosition = styled('p')({
  fontSize: '10px',
  color: 'var(--primary-text-color)',
  lineHeight: '1.16',
  textAlign: 'center',
  marginBottom: '3px',
});

export const IconGitWrap = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'var(--secondary-text-color)',
});

export const IconGit = styled('svg')({
  width: '20px',
  height: '20px',
  fill: 'currentColor',

  transition: 'var(--tra)',
});
