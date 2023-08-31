import { List, ListItem, ListItemButton } from '@mui/material';
import { SidebarBoardItem } from './SidebarBoardItem';
import { useState } from 'react';


import { API } from 'Services/API';
import { useNavigate } from 'react-router-dom';

export const SidebarBoardList = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const navigate = useNavigate();

  const { data: boards } = API.useGetBoardsQuery();

  const handleButtonClick = (index, id) => {
    setCurrentItemIndex(index);
    navigate(`/home/${id}`);
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
              onClick={() => handleButtonClick(index, board._id)}
            >
              <SidebarBoardItem
                id={board._id}
                icon={board.iconId}
                title={board.title}
                current={currentItemIndex === index}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>


    </>
  );
};
