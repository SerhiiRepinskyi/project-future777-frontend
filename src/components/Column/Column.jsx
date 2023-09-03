import React, { useState } from 'react';
import { API } from 'Services/API';
import sprite from '../../assets/images/sprite.svg';
import TaskCard from '../TaskCard/TaskCard';
import AddCard from '../AddCard/AddCard';
import {
  AddCardButton,
  CardsList,
  ColumnHeader,
  ColumnTitle,
  ColumnWrapper,
  StyledIconButton,
} from './Column.styled';
import AddColumn from 'components/AddColumn/AddColumn';

const Column = ({ columnTitle, columnId, cards }) => {
  const [deleteColumn] = API.useDeleteColumnByIdMutation();

  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [isEditColumnOpen, setIsEditColumnOpen] = useState(false);

  const closeAddCard = () => setIsAddCardOpen(false);
  const handleClick = () => setIsAddCardOpen(true);

  const openEditColumn = () => setIsEditColumnOpen(true);
  const closeEditColumn = () => setIsEditColumnOpen(false);

  const handleDeleteColumn = async () => {
    try {
      await deleteColumn({ columnId });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ColumnWrapper>
      <ColumnHeader>
        <ColumnTitle>{columnTitle}</ColumnTitle>
        <div>
          <StyledIconButton onClick={openEditColumn} aria-label="edit">
            <svg
              stroke="var(--primary-text-color)"
              strokeOpacity="0.5"
              width="16"
              height="16"
            >
              <use href={sprite + '#icon-pencil'} />
            </svg>
          </StyledIconButton>
          <StyledIconButton onClick={handleDeleteColumn} aria-label="remove">
            <svg
              stroke="var(--primary-text-color)"
              strokeOpacity="0.5"
              width="16"
              height="16"
            >
              <use href={sprite + '#icon-trash'} />
            </svg>
          </StyledIconButton>
        </div>
      </ColumnHeader>
      <CardsList cols={cards}>
        {cards?.map(
          ({ title, description, priority, deadline, _id: id }, index) => {
            return (
              <TaskCard
                key={id}
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

      <AddCard
        columnId={columnId}
        modalType={'Add card'}
        open={isAddCardOpen}
        handleClose={closeAddCard}
        close={closeAddCard}
      />
      <AddColumn
        modalType={'Edit column'}
        open={isEditColumnOpen}
        columnId={columnId}
        close={closeEditColumn}
        titleValue={columnTitle}
      />
    </ColumnWrapper>
  );
};

export default Column;
