import React, { useState } from 'react';
import { ButtonAdd } from 'components/Buttons/Button';
import AddColumn from 'components/AddColumn/AddColumn';
import Column from '../../components/Column/Column';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { API } from 'Services/API';
import { useParams } from 'react-router-dom';
import { ColumnsWrapper, MainContainer } from './ScreenPage.styled';

const ScreensPage = () => {
  const { boardId } = useParams();
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);
  const { data } = API.useGetBoardByIdQuery(boardId, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const openAddColumn = () => setIsAddColumnOpen(true);
  const closeAddColumn = () => setIsAddColumnOpen(false);

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
