import { List, ListItem, ListItemButton } from '@mui/material';
import { SidebarBoardItem } from './SidebarBoardItem';
import { useState } from 'react';

import { useGetBoardsQuery } from 'redux/boards/boardSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const SidebarBoardList = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  const { data: boards } = useGetBoardsQuery(token);

  const handleButtonClick = (index, id) => {
    setCurrentItemIndex(index);
    navigate(`/home/${id}`);
  };

  return (
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
            onClick={() => handleButtonClick(index, board._id)}
          >
            <SidebarBoardItem
              icon={board.icon}
              text={board.title}
              current={currentItemIndex === index}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
