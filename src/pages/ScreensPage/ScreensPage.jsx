import React, { useEffect, useState } from 'react';
import { ButtonAdd } from 'components/Buttons/Button';
import AddColumn from 'components/AddColumn/AddColumn';
import Column from '../../components/Column/Column';
import { HeaderDashboard } from 'components/HeaderDashboard/HeaderDashboard';
import { API } from 'Services/API';
import { useParams } from 'react-router-dom';
import {
  MainWrapper,
  ColumnsWrapper,
  MainContainer,
} from './ScreenPage.styled';
import { useDispatch, useSelector } from 'react-redux';

const ScreensPage = () => {
  const { boardId } = useParams();
  const [filterValue, setFilterValue] = useState('');
  const stateFilter = useSelector(state => state.boards.filter);
  const dispatch = useDispatch();

  const reqData = {
    id: boardId,
    filter: filterValue,
  };
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);

  const { currentData, data, isFetching } = API.useGetBoardContentByIdQuery(
    reqData,
    {
      refetchOnMountOrArgChange: true,
      // skip: false,
    }
  );

  console.log('currentData :>> ', currentData);
  console.log('data :>> ', data);

  const openAddColumn = () => setIsAddColumnOpen(true);
  const closeAddColumn = () => setIsAddColumnOpen(false);

  useEffect(() => {
    setFilterValue(stateFilter);
    
  }, [dispatch, stateFilter]);

  return (
    <MainWrapper index={data?.background}>
        <HeaderDashboard filter={setFilterValue} title={data?.title} />
      <MainContainer>

        <ColumnsWrapper cols={!data?.content ? 1 : data?.content?.length + 1}>
          {data?.content?.map(
            ({ _id: columnId, title: columnTitle, cards }, index) => (
              <Column
                isFetching={isFetching}
                key={columnId}
                columnData={data.content[index]}
                columnTitle={columnTitle}
                columnId={columnId}
                cards={cards}
              />
            )
          )}

          <ButtonAdd onClick={openAddColumn}></ButtonAdd>
        </ColumnsWrapper>

        {isAddColumnOpen ? (<AddColumn
          modalType={'Add column'}
          open={isAddColumnOpen}
          boardId={boardId}
          close={closeAddColumn}
        />) : <></>}
      </MainContainer>
    </MainWrapper>
  );
};

export default ScreensPage;
