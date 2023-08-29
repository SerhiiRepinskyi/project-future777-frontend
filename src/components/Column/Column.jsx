import styled from "@emotion/styled";
import React, { useState } from "react";
import sprite from '../../assets/images/sprite.svg';
import { IconButton } from "@mui/material";
import data from "./db-tasks.cards.json";
import TaskCard from "../TaskCard/TaskCard";
import { ButtonWithIcon } from "../Buttons/Button";
import ModalLayout from "../ModalLayout/ModalLayout";
import AddCard from "../AddCard/AddCard";

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-rows: 56px auto 56px;
  gap: 14px;
  width: 334px;
  max-height: 80vh;
  margin-right: 14px;
`;

const ColumnHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 334px;
  height: 56px;
  background-color: #161616;
  color: #ffffff;
  padding: 20px;
  /* padding-right: 20px; */
  border-radius: 8px;
`;

const ColumnTitle = styled.h2`
  display: flex;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 14px;
  margin: 0;
`;

const CardsList = styled.div`
  display: grid;
  width: 348px;
  height: 100%;
  gap: 8px;
  border-radius: 8px;
  padding-right: 8px;
  /* overflow: hidden; */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    position: absolute;
    border-radius: 5px;
    margin-left: 4px;
    transform: translateY(50px);
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

const Column = ({ id, title, cards }) => {
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const closeAddCard = () => setIsAddCardOpen(false);
    const handleClick = () => setIsAddCardOpen(true);
  const handleUpdateColumn = () => {
    console.log("Column updated");
  };
  const handleDeleteColumn = () => {
    console.log("Column deleted");
  };
  return (
    <ColumnWrapper>
      <ColumnHeader>
        <ColumnTitle>Column Name</ColumnTitle>
        <div>
          <StyledIconButton onClick={handleUpdateColumn} aria-label="edit">
            <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
              <use href={sprite + "#icon-pencil"} />
            </svg>
          </StyledIconButton>
          <StyledIconButton onClick={handleDeleteColumn} aria-label="remove">
            <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
              <use href={sprite + "#icon-trash"} />
            </svg>
          </StyledIconButton>
        </div>
      </ColumnHeader>
      <CardsList>
        {data.map(({ title, description, priority, deadline, _id: id }) => {
          return (
            <TaskCard
              title={title}
              description={description}
              priority={priority}
              deadline={deadline}
              id={id}
            />
          );
        })}
      </CardsList>
      {data ? (
        <ButtonWithIcon
          onClick={handleClick}
          title={"Add card"}
          type={"submit"}
        />
      ) : (
        <></>
      )}
      <ModalLayout open={isAddCardOpen} handleClose={closeAddCard}>
        <AddCard close={closeAddCard} />
      </ModalLayout>
    </ColumnWrapper>
  );
};

export default Column;
