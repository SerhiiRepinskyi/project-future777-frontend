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
import MeasureTextWidth from './MeasureTextWidth';

export const SidebarBoardItem = ({ text, index, current }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [titleWidth, setTitleWidth] = useState(0);
  const [maxTitleItemWidth, setMaxTitleItemWidth] = useState(175);
  const [truncatedText, setTruncatedText] = useState(text);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
    if (screenWidth < 768) {
      setMaxTitleItemWidth(175);
      const truncatedText = text.substring(0, 22).trim() + '...';
      setTruncatedText(truncatedText);
    } else {
      setMaxTitleItemWidth(186);
      const truncatedText = text.substring(0, 26).trim() + '...';
      setTruncatedText(truncatedText);
    }
  }, [screenWidth, text]);

  const handleEditClick = event => {
    event.stopPropagation();
  };

  const handleDeleteClick = event => {
    event.stopPropagation();
  };

  return (
    <>
      <MeasureTextWidth text={text} setTitleWidth={setTitleWidth} />

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
            <use href={sprite + '#icon-help'}></use>
          </BoardItemIcon>
          <BoardItemTitleWrap
            sx={{
              width: current
                ? { 0: '125px', 768: '135px' }
                : { 0: '175px', 768: '186px' },
            }}
          >
            <BoardItemTitle
              sx={{ opacity: current ? 1 : 0.5 }}
              titleWidth={titleWidth}
              current={current}
            >
              {titleWidth > maxTitleItemWidth && !current ? truncatedText : text}
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
