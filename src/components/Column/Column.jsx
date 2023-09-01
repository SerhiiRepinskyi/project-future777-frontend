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

const Column = ({ columnTitle, columnId }) => {
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);

  const { data: cards, isLoading } = API.useGetAllCardsQuery(columnId, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const closeAddCard = () => setIsAddCardOpen(false);
  const handleClick = () => setIsAddCardOpen(true);

  const handleUpdateColumn = () => {
    console.log('Column updated');
  };
  const handleDeleteColumn = () => {
    console.log('Column deleted');
  };

  return (
    !isLoading && (
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
        <CardsList cols={cards}>
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

        <AddCard
          columnId={columnId}
          modalType={'Add card'}
          open={isAddCardOpen}
          handleClose={closeAddCard}
          close={closeAddCard}
        />
      </ColumnWrapper>
    )
  );
};

export default Column;
