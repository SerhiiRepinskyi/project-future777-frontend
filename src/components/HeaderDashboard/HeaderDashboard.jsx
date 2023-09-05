import sprite from '../../assets/images/sprite.svg';
import { useEffect, useState } from 'react';
import { Filter } from './Filter';

const {
  Container,
  TitleDashBoard,
  FilterButton,
  TitleFilter,
} = require('./HeaderDashboard.styled');
export const HeaderDashboard = ({ title, filter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleModal = e => {
    setIsOpen(!isOpen);
    setAnchorEl(e.currentTarget);
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      window.removeEventListener('keydown', handleKeyDown);
    }
  };
  const handleWindowClick = e => {
    if (e.target.nodeName === 'DIV') {
      setIsOpen(false);
      window.removeEventListener('mousedown', handleWindowClick);
    }
  };
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('mousedown', handleWindowClick);
      window.addEventListener('keydown', handleKeyDown);
    }
  });
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
