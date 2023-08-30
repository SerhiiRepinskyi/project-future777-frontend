import { List, ListItem, ListItemButton } from '@mui/material';
import { SidebarBoardItem } from './SidebarBoardItem';
import { useState } from 'react';

import { useGetBoardsQuery } from 'redux/boards/boardSlice';
import { useSelector } from 'react-redux';

export const SidebarBoardList = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const token = useSelector(state => state.auth.token);
  const { data: boards } = useGetBoardsQuery(token);



  // const boards = [
  //   { _id: 1, title: 'Are you ready to code all night?', icon: 'icon-help' },
  //   { _id: 2, title: 'What are you doing', icon: 'icon-hexagon' },
  //   { _id: 3, title: 'I dont know', icon: 'icon-loading' },
  // ];

  const handleButtonClick = index => {
    setCurrentItemIndex(index);
  };

  return (
    <>
      <List
        disablePadding
        sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 3 }}
      >
        {boards?.map((board, index) => (
          <ListItem key={board._id} disablePadding>
            <ListItemButton
              sx={{
                p: 0,
                m: 0,
                pointerEvents: currentItemIndex === index ? 'none' : 'auto',
              }}
              onClick={() => {
                handleButtonClick(index);
              }}
            >
              <SidebarBoardItem
                iconId={board.iconId}
                title={board.title}
                id={board._id}
                current={currentItemIndex === index}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
