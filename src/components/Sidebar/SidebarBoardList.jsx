import { List, ListItem, ListItemButton } from '@mui/material';
import { SidebarBoardItem } from './SidebarBoardItem';
import { useState } from 'react';
// import { useGetBoardsQuery } from 'redux/boards/boardSlice';
// import { useSelector } from 'react-redux';

const boards = [
  'My planns',
  'Starred',
  'Send email',
  'shit???',
];

export const SidebarBoardList = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // const token = useSelector((state) => state.auth.token);
  // console.log(token);

  // const { data } = useGetBoardsQuery()
  // console.log(data);


  const handleButtonClick = index => {
    setCurrentItemIndex(index);
  };

  return (
    <>
      <List
        disablePadding
        sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 3 }}
      >
        {boards.map((text, index) => (
          <ListItem key={text} disablePadding>
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
                text={text}
                index={index}
                current={currentItemIndex === index}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
