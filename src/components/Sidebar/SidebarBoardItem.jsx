import {
  BoardItemCurrentIcon,
  BoardItemTitle,
  BoardItemTitleWrap,
  BoardItemWrap,
} from './SidebarBoardItem-styled';

import sprite from '../../assets/images/sprite.svg';
import MeasureTitleWidth from './MeasureTitleWidth';

import { debounce } from 'lodash';
import { Box, List, ListItem, ListItemButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { API } from 'Services/API';
import ModalBoard from 'components/ModalBoard/ModalBoard';
import { SidebarBoardItemIcon } from './SidebarBoardItemIcon';
import { useDispatch } from 'react-redux';
import { setBoardId, setBoardsIdArray } from 'redux/boards/boardsAPISlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export const SidebarBoardItem = ({ board, current }) => {
  const { _id: id, iconId, title } = board;

  const boardsIdArray = useSelector(state => state.boards.boardsIdArray);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const [titleWidth, setTitleWidth] = useState(0);
  const [titleWrapWidth, setTitleWrapWidth] = useState(130);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [deleteBoard] = API.useDeleteBoardByIdMutation();

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

  const modalStateChange = () => setIsModalOpen(!isModalOpen);

  const handleEditClick = event => {
    event.stopPropagation();
    modalStateChange();
  };

  const handleDeleteClick = event => {
    event.stopPropagation();

    if (boardsIdArray?.length > 1) {
      const filteredArray = boardsIdArray?.filter(el => el !== id);
      dispatch(setBoardsIdArray(filteredArray));
      dispatch(setBoardId({ boardId: filteredArray[0] }));
      navigate(`/home/${filteredArray[0]}`);
    } 

    if (boardsIdArray?.length === 1) {
      dispatch(setBoardsIdArray([]));
      dispatch(setBoardId({ boardId: '' }));
      navigate("/home");
    }

    deleteBoard(id);
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
          backgroundColor: current
            ? 'var(--sidebar-board-item-bg-color-CURRENT)'
            : 'transparent',
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
          <SidebarBoardItemIcon current={current} iconId={iconId} />

          <BoardItemTitleWrap
            sx={{
              width: current
                ? { 0: 85, 320: 'calc(60vw - 105px)', 375: 120, 768: 130 }
                : { 0: 135, 320: 'calc(60vw - 55px)', 375: 170, 768: 180 },
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
              backgroundColor: 'var(--sidebar-board-item-bg-color-AFTER)',
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
              backgroundColor: 'var(--sidebar-board-item-bg-color-AFTER)',
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
                  backgroundColor: 'transparent',
                  opacity: 0.5,
                  stroke: 'var(--sidebar-primary-text-color)',
                  '&:hover, &:focus': {
                    opacity: 1,
                    backgroundColor: 'transparent',
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
                  backgroundColor: 'transparent',
                  opacity: 0.5,
                  stroke: 'var(--sidebar-primary-text-color)',
                  '&:hover, &:focus': {
                    opacity: 1,
                    backgroundColor: 'transparent',
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

      <ModalBoard
        board={board}
        boardTitle={'Edit board'}
        open={isModalOpen}
        handleClose={modalStateChange}
      />
    </>
  );
};
