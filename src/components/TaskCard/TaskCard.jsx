import React from 'react';
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
import {
  CardStyles,
  TypographyStylesTitle,
  TypographyStylesDescription,
  TypographyStylesPriority,
  CardContentStyles,
} from './TaskCard.styled';
const StyledIconButton = styled(IconButton)`
  &:hover svg {
    stroke: #bedbb0;
    stroke-opacity: 1;
    transition: stroke 0.3s;
  }
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
const TaskCard = ({
  title,
  description,
  priority,
  deadline,
  moveCard,
  deleteCard,
  editCard,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

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
  return (
    <Card sx={CardStyles}>
      <CardContent sx={CardContentStyles}>
        <Typography sx={TypographyStylesTitle} variant="h4" component="div">
          Заголовок картки {title}
        </Typography>
        <Typography sx={TypographyStylesDescription} variant="body2">
          Текст або вміст картки буде тут. {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography sx={TypographyStylesPriority} variant="body2">
          Priority:
          {priority}
        </Typography>
        <Typography sx={TypographyStylesPriority} variant="body2">
          Deadline:
          {deadline}
        </Typography>
        <StyledIconButton onClick={handleOpenMenu} aria-label="next-colomn">
          <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
            <use href={sprite + '#icon-active'} />
          </svg>
        </StyledIconButton>
        <StyledIconButton onClick={editCard} aria-label="edit">
          <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
            <use href={sprite + '#icon-pencil'} />
          </svg>
        </StyledIconButton>
        <StyledIconButton onClick={deleteCard} aria-label="remove">
          <svg stroke="#fff" strokeOpacity="0.5" width="16" height="16">
            <use href={sprite + '#icon-trash'} />
          </svg>
        </StyledIconButton>
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
    </Card>
  );
};

export default TaskCard;
