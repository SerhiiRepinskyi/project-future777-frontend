import React, { useEffect, useState } from 'react';
import { ButtonAdd } from 'components/Buttons/Button';
import AddColumn from 'components/AddColumn/AddColumn';
import Column from '../../components/Column/Column';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { API } from 'Services/API';
import { useParams } from 'react-router-dom';
import { ColumnsWrapper, MainContainer } from './ScreenPage.styled';
import { useDispatch } from 'react-redux';
import { setBoardId } from 'redux/boards/boardsAPISlice';

const ScreensPage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();

  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);
  const { data } = API.useGetBoardByIdQuery(boardId, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const openAddColumn = () => setIsAddColumnOpen(true);
  const closeAddColumn = () => setIsAddColumnOpen(false);

useEffect(() => {
  dispatch(setBoardId({boardId}));
}, [boardId, dispatch]);

  return (
    <MainContainer>
      <HeaderDashboard title={data?.title} />

      <ColumnsWrapper cols={!data?.columns ? 1 : data?.columns?.length + 1}>
        {data?.columns?.map(({ columnId, columnTitle }) => (
          <Column
            key={columnId}
            columnTitle={columnTitle}
            columnId={columnId}
          />
        ))}
        <ButtonAdd onClick={openAddColumn}></ButtonAdd>
      </ColumnsWrapper>

      <AddColumn
        modalType={'Add column'}
        open={isAddColumnOpen}
        boardId={boardId}
        close={closeAddColumn}
      />
    </MainContainer>
  );
};

export default ScreensPage;
