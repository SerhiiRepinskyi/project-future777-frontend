import { List, ListItem, ListItemButton } from '@mui/material';
import { SidebarBoardItem } from './SidebarBoardItem';
import { useEffect, useState } from 'react';

import { API } from 'Services/API';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBoardId, setBoardsIdArray } from 'redux/boards/boardsAPISlice';

import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable as Droppable } from 'helpers/StrictModeDroppable';

export const SidebarBoardList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = API.useGetBoardsQuery();
  const [boardsArray, setBoardsArray] = useState(data || []);

  const boardId = useSelector(state => state.boards.boardId);
  const boardsIdArray = useSelector(state => state.boards.boardsIdArray);

  useEffect(() => {
    if (!boardsIdArray && data?.length) {
      dispatch(setBoardsIdArray(data?.map(el => el._id)));
    }

    let myArray;
    if (boardsIdArray?.length && data?.length) {
      myArray = boardsIdArray.map(el => {
        return data.find(board => board._id === el);
      });

      const newItems = data.filter(board => {
        return !boardsIdArray.includes(board._id);
      });

      if (newItems?.length) myArray = [...newItems, ...myArray];
    }

    setBoardsArray(myArray || data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, dispatch]);

  const handleOnDragEnd = result => {
    if (!result.destination) return;

    const boards = [...boardsArray];

    const [reorderedBoard] = boards.splice(result.source.index, 1);

    boards.splice(result.destination.index, 0, reorderedBoard);

    const newBoardsIdArray = boards.map(board => board._id);
    dispatch(setBoardsIdArray(newBoardsIdArray));

    setBoardsArray(boards);
  };

  const handleButtonClick = id => {
    dispatch(setBoardId({ boardId: id }));
    navigate(`/home/${id}`);
  };

  if (!data || !boardsArray) {
    // Очікування завантаження даних або boardsArray
    return <div>Loading...</div>;
  }
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="boardsArray">
          {provided => (
            <List
              {...provided.droppableProps}
              ref={provided.innerRef}
              disablePadding
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5,
                mb: 3,
              }}
            >
              {boardsArray?.map((board, index) => (
                <Draggable
                  draggableId={board._id.toString()}
                  key={board._id}
                  index={index}
                >
                  {provided => (
                    <ListItem
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      disablePadding
                    >
                      <ListItemButton
                        sx={{
                          p: 0,
                          m: 0,
                          '&:hover, &:focus': {
                            backgroundColor:
                              'var(--sidebar-board-item-bg-color-CURRENT)',
                          },
                        }}
                        onClick={() => handleButtonClick(board._id)}
                      >
                        <SidebarBoardItem
                          board={board}
                          current={boardId === board._id}
                        />
                      </ListItemButton>
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
