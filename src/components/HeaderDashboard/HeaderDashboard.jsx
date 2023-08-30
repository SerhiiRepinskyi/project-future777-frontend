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
export const HeaderDashboard = ({title}) => {
  const [isOpen, setIsOpen] = useState();
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <Container>
      <TitleDashBoard>{title}</TitleDashBoard>
      <FilterButton onClick={toggleModal}>
        <svg aria-label="filter icon" width="16" height="16">
          <use href={sprite + '#icon-filter'}></use>
        </svg>
        <TitleFilter>Filters</TitleFilter>
      </FilterButton>
      {isOpen && <Filter open={isOpen} onClose={toggleModal} />}
    </Container>
  );
};
