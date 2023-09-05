import { ButtonWithIcon } from '../Buttons/Button';
import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const ColumnWrapper = styled.li`
  display: flex;
  flex-direction: column;
  /* grid-template-rows: 56px auto 56px; */
  align-items: left;
  /* gap: 14px; */
  width: 346px;
  height: 100vh;
  max-height: 100%;
  padding-right: 12px;
  padding-bottom: 14px;
  margin-right: 14px;
  margin-bottom: auto;

  @media screen and (min-width: 1400px) {
    max-height: 80vh;
    margin-bottom: auto;
  }
`;

export const ColumnHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 334px;
  height: 56px;
  background-color: var(--secondary-bg-color);
  color: var(--primary-text-color);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 14px;
`;

export const ColumnTitle = styled.h2`
  display: flex;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 14px;
  margin: 0;
`;

export const CardsList = styled.ul`
  display: ${props => {
    if (props.cols.length < 4) {
      return `flex`;
    }
    return `grid`;
  }};
  flex-direction: column;
  grid-template-rows: 155px;
  width: 346px;
  margin-bottom: 14px;
  max-height: 60vh;
  gap: 8px;
  border-radius: 8px;
  padding-right: 8px;
  overflow-x: hidden;
  overflow-y: ${props => {
    if (props.cols.length < 4) {
      return `hidden`;
    }
    return `scroll`;
  }};
  ::-webkit-scrollbar {
    border-radius: 5px;
    margin-left: 4px;
    width: 8px;
    background-color: var(--screen-page-scrollbar-bg-color);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--screen-page-scrollbar-thumb-color);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--screen-page-scrollbar-thumb-color-HOVER);
  }
`;

export const StyledIconButton = styled(IconButton)`
  width: 18px;
  height: 18px;
  padding: 0;
  margin: 4px;
  &:hover svg {
    stroke: #bedbb0;
    stroke-opacity: 1;
    transition: stroke 0.3s;
  }
`;

export const AddCardButton = styled(ButtonWithIcon)`
  width: 334px;
`;
