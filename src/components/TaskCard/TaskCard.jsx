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

import { deleteCard } from '../../redux/tasks/cardsAPISlice';
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
  id,
  columnId,
  columnTitle,
  columnArray,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const [deleteCardById] = API.useDeleteCardByIdMutation();
  const [updateCardColumnById] = API.useUpdateCardColumnByIdMutation();
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);

  const dispatch = useDispatch();

  const closeAddCard = () => setIsAddCardOpen(false);
  const handleClick = () => setIsAddCardOpen(true);

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDeleteCard = async () => {
    try {
      const response = await deleteCardById(id);
      dispatch(deleteCard(response));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const handleMoveCard = async e => {
    const columnIddata = { newOwnerId: e.target.id };
    try {
      await updateCardColumnById({ id, columnIddata });
    } catch (error) {
      console.error('Error moving card:', error);
    }
  };
  const date = new Date(`${deadline}`);
  const formattedDate = format(date, 'dd/MM/yyyy');

  const currentDate = new Date();
  const formatteCurrentDate = format(currentDate, 'dd/MM/yyyy');
  const isDeadlineToday = formattedDate === formatteCurrentDate;

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
          <Box sx={TypographyStylesPriority} variant="body2">
            Priority
            <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <Circle priority={priority} />
              <TypographyText variant="subText">
                {getPriorityText(priority)}
              </TypographyText>
            </Box>
          </Box>
          <Box sx={TypographyStylesPriority} variant="body2">
            Deadline
            <Box
              sx={{
                width: '14px',
                height: '14px',
                color: 'var(--primary-text-color)',
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
          </Box>
        </Box>
        <Box>
          {isDeadlineToday && (
            <StyledIconButton aria-label="deadline">
              <svg
                stroke="var(--primary-text-color)"
                strokeOpacity="0.5"
                width="16"
                height="16"
              >
                <use href={sprite + '#icon-bell'} />
              </svg>
            </StyledIconButton>
          )}
          <StyledIconButton onClick={handleOpenMenu} aria-label="next-colomn">
            <svg
              stroke="var(--primary-text-color)"
              strokeOpacity="0.5"
              width="16"
              height="16"
            >
              <use href={sprite + '#icon-active'} />
            </svg>
          </StyledIconButton>
          <StyledIconButton
            onClick={handleClick}
            title={'Edit card'}
            aria-label="edit"
          >
            <svg
              stroke="var(--primary-text-color)"
              strokeOpacity="0.5"
              width="16"
              height="16"
            >
              <use href={sprite + '#icon-pencil'} />
            </svg>
          </StyledIconButton>
          {isAddCardOpen ? (
            <AddCard
              columnId={columnId}
              cardId={id}
              modalType={'Edit card'}
              open={isAddCardOpen}
              handleClose={closeAddCard}
              close={closeAddCard}
              titleValue={title}
              descrValue={description}
              priorityValue={priority}
              deadlineValue={deadline}
            />
          ) : (
            <></>
          )}
          <StyledIconButton onClick={handleDeleteCard} aria-label="remove">
            <svg stroke="var(--cards-icon-color)" width="16" height="16">
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
        <ListMenuStyles
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          {columnArray
            .filter(({ _id }) => _id !== columnId) // Фильтруем элементы по _id
            .map(({ title, _id: newOwner }, index) => (
              <Box
                onClick={handleMoveCard}
                key={newOwner}
                id={newOwner}
                sx={{
                  margin: '8px 0',
                  display: 'flex',
                  gap: '8px',
                  '&:hover': {
                    color: 'var(--default-screen-page-link-color)',
                  },
                  '&:hover svg': {
                    stroke: 'var(--default-screen-page-link-color)',
                    strokeOpacity: 1,
                    transition: 'stroke 0.3s',
                  },
                }}
              >
                {title}
                <svg stroke="var(--cards-icon-color)" width="16" height="16">
                  <use href={sprite + '#icon-active'} />
                </svg>
              </Box>
            ))}
        </ListMenuStyles>
      </Menu>
    </CardStyles>
  );
}

export default TaskCard;
