import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { IconButton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import sprite from '../../assets/images/sprite.svg';
import { styled } from '@mui/material';
import getPriorityColor from './TaskCard.styled';

import { deleteCard, setCardData } from '../../redux/tasks/cardsAPISlice';
import { useDispatch } from 'react-redux';
import { API } from 'Services/API';

import {
  TypographyStylesTitle,
  TypographyStylesDescription,
  TypographyStylesPriority,
  CardContentStyles,
  ActionsBox,
  CardActionsStyled,
  Circle,
} from './TaskCard.styled';
const StyledIconButton = styled(IconButton)`
  &:hover svg {
    stroke: #bedbb0;
    stroke-opacity: 1;
    transition: stroke 0.3s;
  }
`;

const CardStyles = styled(Card)`
  width: 334px;
  height: 154px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  padding-right: 20px;
  background-color: #121212;
  border-radius: 8px;
  border-left: 4px solid ${props => getPriorityColor(props.priority)};
`;

const ListMenuStyles = styled(MenuItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Poppins';
  font-size: 14px;

  font-weight: 400px;

  &:hover {
    color: #bedbb0;
  }
  &:hover svg {
    stroke: #bedbb0;
    stroke-opacity: 1;
    transition: stroke 0.3s;
  }
`;
function TaskCard({ title, description, priority, deadline, moveCard, id }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [updateCardById] = API.useUpdateCardByIdMutation();
  const [deleteCardById] = API.useDeleteCardByIdMutation();
  const dispatch = useDispatch();

  const date = new Date(`${deadline}`);
  const formattedDate = format(date, 'dd/MM/yyyy');

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMoveCard = newColumn => {
    handleCloseMenu();
    moveCard(newColumn);
  };
  const handleDeleteCard = async () => {
    try {
      const response = await deleteCardById({ id });
      dispatch(deleteCard(response));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const handleUpdateCard = async () => {
    try {
      const updatedData = {
        title,
        description,
        priority,
        deadline,

        /* об'єкт з оновленими даними картки */
      };
      const response = await updateCardById({ id, updatedData });
      dispatch(setCardData(response));
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  return (
    <CardStyles priority={priority}>
      <CardContent sx={CardContentStyles}>
        <Typography sx={TypographyStylesTitle} variant="h4" component="div">
          Заголовок картки {title}
        </Typography>
        <Typography sx={TypographyStylesDescription} variant="body2">
          Текст або вміст картки буде тут. {description}
        </Typography>
      </CardContent>
      <CardActions sx={CardActionsStyled}>
        <Box sx={ActionsBox}>
          <Typography sx={TypographyStylesPriority} variant="body2">
            Priority:
            <Circle priority={priority} />
            <Typography variant="subText">{priority}</Typography>
          </Typography>
          <Typography sx={TypographyStylesPriority} variant="body2">
            Deadline:
            <Box
              sx={{
                width: '14px',
                height: '14px',
                color: '#fff',
                fontFamily: 'Poppins',
                fontSize: '10px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '-0.2px',
              }}
            >
              {' '}
              {formattedDate}
            </Box>
          </Typography>
        </Box>
        <Box>
          <StyledIconButton onClick={handleOpenMenu} aria-label="next-colomn">
            <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
              <use href={sprite + '#icon-active'} />
            </svg>
          </StyledIconButton>
          <StyledIconButton onClick={handleUpdateCard} aria-label="edit">
            <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
              <use href={sprite + '#icon-pencil'} />
            </svg>
          </StyledIconButton>
          <StyledIconButton onClick={handleDeleteCard} aria-label="remove">
            <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
              <use href={sprite + '#icon-trash'} />
            </svg>
          </StyledIconButton>
        </Box>
      </CardActions>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            backgroundColor: '#151515',
            width: '135px',
          },
        }}
      >
        {/* List of columns to move the card */}
        <ListMenuStyles onClick={() => handleMoveCard('Column 1')}>
          {' '}
          <Box> In progress </Box>
          <Box>
            {' '}
            <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
              <use href={sprite + '#icon-active'} />
            </svg>
          </Box>
        </ListMenuStyles>
        <ListMenuStyles onClick={() => handleMoveCard('Column 2')}>
          <Box> Done </Box>
          <Box>
            {' '}
            <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
              <use href={sprite + '#icon-active'} />
            </svg>
          </Box>
        </ListMenuStyles>
      </Menu>
    </CardStyles>
  );
}

export default TaskCard;
