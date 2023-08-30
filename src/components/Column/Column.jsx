import styled from '@emotion/styled';
import React, { useState } from 'react';
import sprite from '../../assets/images/sprite.svg';
import { IconButton } from '@mui/material';
import TaskCard from '../TaskCard/TaskCard';
import { ButtonWithIcon } from '../Buttons/Button';
import ModalLayout from '../ModalLayout/ModalLayout';
import AddCard from '../AddCard/AddCard';
import { useGetCardsQuery } from 'redux/tasks/cardSlice';
import { useSelector } from 'react-redux';

const ColumnWrapper = styled.li`
  display: grid;
  grid-template-rows: 56px auto 56px;
  align-items: left;
  gap: 14px;
  width: 346px;
  max-height: 80vh;
  padding-right: 12px;
  padding-bottom: 14px;
  margin-right: 14px;
`;

const ColumnHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 334px;
  height: 56px;
  background-color: #121212;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
`;

const ColumnTitle = styled.h2`
  display: flex;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 14px;
  margin: 0;
`;

const CardsList = styled.ul`
  display: grid;
  width: 346px;
  height: 100%;
  gap: 8px;
  border-radius: 8px;
  padding-right: 8px;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    border-radius: 5px;
    margin-left: 4px;
    width: 8px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: #121212;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #9dc888;
  }
`;

const StyledIconButton = styled(IconButton)`
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

const AddCardButton = styled(ButtonWithIcon)`
  width: 334px;
`;

const Column = ({ columnTitle, columnId }) => {
  const token = useSelector(state => state.auth.token);
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const { data: cards } = useGetCardsQuery({ columnId, token });
  
  const closeAddCard = () => setIsAddCardOpen(false);
  const handleClick = () => setIsAddCardOpen(true);
  
  const handleUpdateColumn = () => {
    console.log('Column updated');
  };
  const handleDeleteColumn = () => {
    console.log('Column deleted');
  };

  return (
    <ColumnWrapper>
      <ColumnHeader>
        <ColumnTitle>{columnTitle}</ColumnTitle>
        <div>
          <StyledIconButton onClick={handleUpdateColumn} aria-label="edit">
            <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
              <use href={sprite + '#icon-pencil'} />
            </svg>
          </StyledIconButton>
          <StyledIconButton onClick={handleDeleteColumn} aria-label="remove">
            <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
              <use href={sprite + '#icon-trash'} />
            </svg>
          </StyledIconButton>
        </div>
      </ColumnHeader>
      <CardsList>
        {cards?.map(
          ({ title, description, priority, deadline, _id: id }, index) => {
            return (
              <TaskCard
                title={title}
                description={description}
                priority={priority}
                deadline={deadline}
                id={id}
              />
            );
          }
        )}
      </CardsList>

      <AddCardButton onClick={handleClick} title={'Add card'} />

      <ModalLayout
        title={'Add card'}
        open={isAddCardOpen}
        handleClose={closeAddCard}
      >
        <AddCard close={closeAddCard} />
      </ModalLayout>
    </ColumnWrapper>
  );
};

export default Column;
