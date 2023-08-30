import {
  BoardItemCurrentIcon,
  BoardItemIcon,
  BoardItemTitle,
  BoardItemTitleWrap,
  BoardItemWrap,
} from './SidebarBoardItem-styled';

import { debounce } from 'lodash';

import sprite from '../../assets/images/sprite.svg';
import { Box, List, ListItem, ListItemButton } from '@mui/material';
import { useEffect, useState } from 'react';
import MeasureTitleWidth from './MeasureTitleWidth';
import { useSelector } from 'react-redux';
import { useDeleteBoardsMutation } from 'redux/boards/boardSlice';

export const SidebarBoardItem = ({ title, iconId, id, current }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [titleWidth, setTitleWidth] = useState(0);
  const [titleWrapWidth, setTitleWrapWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const token = useSelector(state => state.auth.token);
  const [deleteBoard] = useDeleteBoardsMutation();

  // console.log(deleteBoard);
  // console.log(data);

  const handleResize = debounce(() => {
    setScreenWidth(window.innerWidth);
  }, 200);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (screenWidth <= 320) {
      setTitleWrapWidth(85);
    } else if (screenWidth <= 768) {
      setTitleWrapWidth(120);
    } else setTitleWrapWidth(130);
  }, [screenWidth, title]);

  const handleEditClick = event => {
    event.stopPropagation();
  };

  const handleDeleteClick = event => {
    event.stopPropagation();
    deleteBoard({ id, token });
  };

  return (
    <>
      <MeasureTitleWidth title={title} setTitleWidth={setTitleWidth} />

      <BoardItemWrap
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          pl: { 0: 1.75, 768: 3 },
          pr: { 0: 1.75, 768: 3 },
          backgroundColor: current ? 'rgba(31, 31, 31, 0.4)' : 'transparent',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: { 0: 0.5, 768: 1 },
            alignItems: 'center',
          }}
        >
          <BoardItemIcon sx={{ opacity: current ? 1 : 0.5 }}>
            <use href={sprite + iconId}></use>
          </BoardItemIcon>

          <BoardItemTitleWrap
            sx={{
              width: current
                ? { 0: 85, 320: '27vw', 375: 120, 768: 130 }
                : { 0: 135, 320: '42vw', 375: 170, 768: 180 },
            }}
          >
            <BoardItemTitle
              sx={{ opacity: current ? 1 : 0.5 }}
              titleWidth={titleWidth}
              titleWrapWidth={titleWrapWidth}
              current={current}
            >
              {title}
            </BoardItemTitle>
          </BoardItemTitleWrap>
        </Box>

        {isHovered && (
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              width: '4px',
              height: '100%',
              backgroundColor: '#BEDBB0',
              opacity: 0.4,
              borderRadius: '4px 0px 0px 4px',
            }}
          />
        )}

        {current && (
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              width: '4px',
              height: '100%',
              backgroundColor: '#BEDBB0',
              borderRadius: '4px 0px 0px 4px',
            }}
          />
        )}

        {current && (
          <List
            disablePadding
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  p: 0,
                  m: 0,
                  pointerEvents: 'auto',
                  opacity: 0.5,
                  '&:hover, &:focus': {
                    opacity: 1,
                  },
                }}
                onClick={handleEditClick}
              >
                <BoardItemCurrentIcon>
                  <use href={sprite + '#icon-pencil'}></use>
                </BoardItemCurrentIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  p: 0,
                  m: 0,
                  pointerEvents: 'auto',
                  opacity: 0.5,
                  '&:hover, &:focus': {
                    opacity: 1,
                  },
                }}
                onClick={handleDeleteClick}
              >
                <BoardItemCurrentIcon>
                  <use href={sprite + '#icon-trash'}></use>
                </BoardItemCurrentIcon>
              </ListItemButton>
            </ListItem>
          </List>
        )}
      </BoardItemWrap>
    </>
  );
};
