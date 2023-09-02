import { List, ListItem, ListItemButton } from '@mui/material';
import { SidebarBoardItem } from './SidebarBoardItem';
import { useEffect, useState } from 'react';

import { API } from 'Services/API';
import { useNavigate } from 'react-router-dom';

export const SidebarBoardList = () => {
  const navigate = useNavigate();
  const { data } = API.useGetBoardsQuery();

  const [boardsArray, setBoardsArray] = useState([]);
  const [currentItemId, setCurrentItemId] = useState('');

  useEffect(() => {
    if (data?.length !== boardsArray?.length) {
      const currentItemId = data?.length > 0 ? data[data?.length - 1]._id : '';
      setCurrentItemId(currentItemId);
    }
    setBoardsArray(data);
  }, [boardsArray, data]);

  const handleButtonClick = id => {
    setCurrentItemId(id);
    navigate(`/home/${id}`);
  };

  return (
    <>
      <List
        disablePadding
        sx={{
          display: 'flex',
          flexDirection: 'column-reverse',
          gap: 0.5,
          mb: 3,
        }}
      >
        {boardsArray?.map(board => (
          <ListItem key={board._id} disablePadding>
            <ListItemButton
              sx={{
                p: 0,
                m: 0,
                pointerEvents: currentItemId === board._id ? 'none' : 'auto',
                '&:hover, &:focus': {
                  backgroundColor: 'var(--sidebar-board-item-bg-color-CURRENT)',
                },
              }}
              onClick={() => handleButtonClick(board._id)}
            >
              <SidebarBoardItem
                board={board}
                current={currentItemId === board._id}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
