import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import AddCard from 'components/AddCard/AddCard';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import sprite from '../../assets/images/sprite.svg';

import { getPriorityText } from './TaskCard.styled';

import { deleteCard, setCardData } from '../../redux/tasks/cardsAPISlice';
import { useDispatch } from 'react-redux';
import { API } from 'Services/API';

import {
  TypographyStylesTitle,
  TypographyStylesPriority,
  CardContentStyles,
  ActionsBox,
  CardActionsStyled,
  Circle,
  TypographyText,
  StyledIconButton,
  CardStyles,
  ListMenuStyles,
  TruncatedText,
} from './TaskCard.styled';

function TaskCard({
  title,
  description,
  priority,
  deadline,
  moveCard,
  id,
  columnId,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [updateCardById] = API.useUpdateCardByIdMutation();
  const [deleteCardById] = API.useDeleteCardByIdMutation();
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const dispatch = useDispatch();

  const date = new Date(`${deadline}`);
  const formattedDate = format(date, 'dd/MM/yyyy');

  const closeAddCard = () => setIsAddCardOpen(false);
  const handleClick = () => setIsAddCardOpen(true);

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
      handleClick();
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  return (
    <CardStyles priority={priority}>
      <CardContent sx={CardContentStyles}>
        <Typography sx={TypographyStylesTitle} variant="h4" component="div">
          {title}
        </Typography>
        <TruncatedText text={description} />
      </CardContent>
      <CardActions sx={CardActionsStyled}>
        <Box sx={ActionsBox}>
          <Typography sx={TypographyStylesPriority} variant="body2">
            Priority:
            <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <Circle priority={priority} />
              <TypographyText variant="subText">
                {getPriorityText(priority)}
              </TypographyText>
            </Box>
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
          <StyledIconButton
            onClick={handleUpdateCard}
            title={'Edit card'}
            aria-label="edit"
          >
            <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
              <use href={sprite + '#icon-pencil'} />
            </svg>
          </StyledIconButton>
          <AddCard
            columnId={columnId}
            modalType={'Edit card'}
            open={isAddCardOpen}
            handleClose={closeAddCard}
            close={closeAddCard}
          />
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
