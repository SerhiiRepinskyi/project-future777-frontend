import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import EllipsisText from 'react-ellipsis-text';
import MenuItem from '@mui/material/MenuItem';
export function getPriorityColor(priority) {
  switch (priority) {
    case 3:
      return '#BEDBB0';
    case 1:
      return '#8FA1D0';
    case 2:
      return '#E09CB5';
    default:
      return '#bababa';
  }
}
export function getPriorityText(priority) {
  switch (priority) {
    case 1:
      return 'High';
    case 2:
      return 'Low';
    case 3:
      return 'Medium';
    default:
      return 'Without';
  }
}
export const TypographyStylesTitle = {
  color: 'var(--primary-text-color)',
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '-0.28px',
  marginBottom: '8px',
};

export const TypographyStylesPriority = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  gap: '4px',
  color: 'var( --secondary-text-color)',
  fontFamily: 'Poppins',
  fontSize: '8px',

  fontWeight: '400',
  lineHeigt: 'normal',
  letterSpacing: '-0.16px',
};
export const CardContentStyles = {
  borderBottom: '1px solid var(--cards-underline)',
  padding: '0px',
  paddingBottom: '14px',
  marginBottom: '14px',
};
export const ActionsBox = {
  display: 'flex',
  alignItems: 'base-line',
  justifyContent: 'center',
  gap: '14px',
};
export const CardActionsStyled = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => getPriorityColor(props.priority)};
`;
export const TypographyText = styled.div`
  color: var(--primary-text-color);

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
`;
export const CardStyles = styled.div`
  width: 100%;
  height: 154px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  padding-right: 20px;
  background-color: var(--cards-bg-color);
  border-radius: 8px;
  border-left: 4px solid ${props => getPriorityColor(props.priority)};
  overflow: auto;
`;
export const StyledIconButton = styled(IconButton)`
  &:hover svg {
    stroke: var(--default-screen-page-link-color);
    stroke-opacity: 1;
    transition: stroke 0.3s;
  }
`;
export const ListMenuStyles = styled(MenuItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--secondary-text-color);
  font-family: 'Poppins';
  font-size: 14px;

  font-weight: 400px;

  &:hover {
    color: var(--default-screen-page-link-color);
  }
  &:hover svg {
    stroke: var(--default-screen-page-link-color);
    stroke-opacity: 1;
    transition: stroke 0.3s;
  }
`;
const TextContainer = styled.div`
  max-height: ${props =>
    props.expanded
      ? 'none'
      : '36px'}; /* Максимальна висота для двох рядків тексту */
  overflow: hidden;
  position: relative;
`;

const Text = styled.div`
  color: var(--secondary-text-color);
  font-size: 12px;
  font-weight: 400px;
  padding-right: 18px;
  line-height: 18px; /* Висота рядка */
`;

const ReadMore = styled.div`
  color: var(--secondary-text-color);
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: transparent;
  padding: 0 5px;
  font-weight: bold;
  cursor: pointer;
  display: ${props => (props.expanded ? 'none' : 'block')};
  &:hover {
    text-decoration: underline;
  }
`;
const ShowMoreButton = styled.button`
  color: var(--primary-text-color);
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const TruncatedText = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const resetText = () => {
    setExpanded(false);
  };

  return (
    <TextContainer expanded={expanded}>
      <Text>{text}</Text>
      {!expanded && (
        <>
          <ReadMore onClick={toggleExpanded}>...</ReadMore>
        </>
      )}
      {expanded && <ShowMoreButton onClick={resetText}>Go back</ShowMoreButton>}
    </TextContainer>
  );
};
