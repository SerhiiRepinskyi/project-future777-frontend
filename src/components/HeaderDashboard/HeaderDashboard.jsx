// import ModalLayout from 'components/ModalLayout/ModalLayout';
import sprite from '../../assets/images/sprite.svg';
import { useState } from 'react';
import { Filter } from './Filter';

const {
  Container,
  TitleDashBoard,
  FilterButton,
  TitleFilter,
} = require('./HeaderDashboard.styled');
export const HeaderDashboard = ({ title, filter }) => {
  const [isOpen, setIsOpen] = useState();
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleModal = e => {
    setIsOpen(!isOpen);
    setAnchorEl(e.currentTarget);
  };

  return (
    <Container>
      <TitleDashBoard>{title}</TitleDashBoard>
      <FilterButton onClick={toggleModal}>
        <svg
          aria-label="filter icon"
          width="16"
          height="16"
          stroke="var(--secondary-text-color)"
        >
          <use href={sprite + '#icon-filter'}></use>
        </svg>
        <TitleFilter>Filters</TitleFilter>
      </FilterButton>
      {isOpen && (
        <Filter
          filter={filter}
          open={isOpen}
          onClose={toggleModal}
          anchorEl={anchorEl}
        />
      )}
    </Container>
  );
};
