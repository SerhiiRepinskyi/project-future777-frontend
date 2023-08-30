import React, { useState } from 'react';
import { Box } from '@mui/material';
import { SIDEBARWIDTH } from 'components/Sidebar/SidebarCONSTANTS';
import { ButtonAdd } from 'components/Buttons/Button';
import ModalLayout from '../../components/ModalLayout/ModalLayout';
import AddColumn from 'components/AddColumn/AddColumn';
import Column from '../../components/Column/Column';
import styled from '@emotion/styled';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import {
  useGetBoardByIdQuery,
} from 'redux/boards/boardSlice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  align-items: top;

  ::-webkit-scrollbar {
    border-radius: 5px;
    margin-left: 4px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: #121212;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #9dc888;
  }
  @media screen and (min-width: 769px) {
    overflow-x: ${props => {
      if (props.cols < 5) {
        return `hidden`;
      }
      return `scroll`;
    }};
    display: grid;
    grid-template-columns: ${props => {
      return `repeat(${props.cols + 1}, 334px)`;
    }};
  }
  @media screen and (min-width: 1400px) {
    display: grid;
    grid-template-columns: 334px 334px;
  }
`;

const ScreensPage = () => {
  const { boardId } = useParams();
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);
  const token = useSelector(state => state.auth.token);
  const { data } = useGetBoardByIdQuery({ boardId, token });

  const columns = data?.columns;
  console.log('data :>> ', data);
  console.log('columns :>> ', columns);
  const openAddColumn = () => setIsAddColumnOpen(true);
  const closeAddColumn = () => setIsAddColumnOpen(false);
 
  return (
    <Box
      component="main"
      sx={{
        pt: { 0: 9.25, 768: 11, 1440: 9.75 },
        pb: { 0: 3, 768: 4, 1440: 1 },
        pl: { 0: 2.5, 768: 4, 1440: 3 },
        pr: { 0: 2.5, 768: 4, 1440: 3 },
        width: { 0: '100vw', 1440: `calc(100vw - ${SIDEBARWIDTH}px)` },
        flexGrow: 1,
        height: { 0: '100%', 768: '100vh', 1440: '100vh' },
        backgroundColor: '#2e2e2e',
      }}
    >
      <HeaderDashboard title={data?.title} />

      <ColumnsWrapper cols={!columns ? 1 : columns.length + 1}>
        {columns?.map(({ columnId, columnTitle }) => (
          <Column
            key={columnId}
            columnTitle={columnTitle}
            columnId={columnId}
          />
        ))}
        {/* <Column /> */}
        <ButtonAdd onClick={openAddColumn}></ButtonAdd>
      </ColumnsWrapper>
      {/* Використовуйте відповідний компонент ModalLayout з дочірнім елементом AddColumn */}
      <ModalLayout
        title={'Add column'}
        open={isAddColumnOpen}
        handleClose={closeAddColumn}
      >
        <AddColumn
          boardId={boardId}
          close={closeAddColumn}
        />
      </ModalLayout>
    </Box>
  );
};

export default ScreensPage;
