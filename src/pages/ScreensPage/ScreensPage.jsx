import React, { useState } from 'react';
import { Box } from '@mui/material';
import { ButtonAdd } from 'components/Buttons/Button';
import AddColumn from 'components/AddColumn/AddColumn';
import Column from '../../components/Column/Column';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { API } from 'Services/API';
import { useParams } from 'react-router-dom';
import { ColumnsWrapper, screenSyles } from './ScreenPage.styled';
// import { useSelector } from 'react-redux';

const ScreensPage = () => {
  const { boardId } = useParams();
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);
  const { data } = API.useGetBoardByIdQuery(boardId);
  console.log('data :>> ', data);
  // const columnsState = useSelector(state => state);
  // console.log('columns :>> ', columnsState);
  const columns = data?.columns;
  // console.log('data :>> ', data);
  // console.log('columns :>> ', columns);
  const openAddColumn = () => setIsAddColumnOpen(true);
  const closeAddColumn = () => setIsAddColumnOpen(false);

  return (
    <Box component="main" sx={screenSyles}>
      <HeaderDashboard title={data?.title} />

      <ColumnsWrapper cols={!columns ? 1 : columns.length + 1}>
        {/* <Column /> */}
        {columns?.map(({ columnId, columnTitle }) => (
          <Column
            key={columnId}
            columnTitle={columnTitle}
            columnId={columnId}
          />
        ))}
        <ButtonAdd onClick={openAddColumn}></ButtonAdd>
      </ColumnsWrapper>
      {/* Використовуйте відповідний компонент ModalLayout з дочірнім елементом AddColumn */}
      
        <AddColumn
          modalType={'Add column'}
          open={isAddColumnOpen}
          boardId={boardId}
          close={closeAddColumn}
        />
    </Box>
  );
};

export default ScreensPage;
