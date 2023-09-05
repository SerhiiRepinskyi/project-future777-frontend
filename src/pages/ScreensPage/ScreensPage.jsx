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
import Loader from 'components/Loader';

const ScreensPage = () => {
  const { boardId } = useParams();
  const [filterValue, setFilterValue] = useState('');
  const [dataQuery, setDataQuery] = useState([]);
  const stateFilter = useSelector(state => state.boards.filter);
  const dispatch = useDispatch();

  const reqData = {
    id: boardId,
    filter: filterValue,
  };
  const [isAddColumnOpen, setIsAddColumnOpen] = useState(false);

  const { data, isFetching } = API.useGetBoardContentByIdQuery(reqData, {
    // refetchOnMountOrArgChange: true,
  });
  // setDataQuery(data.content);

  console.log('data :>> ', data);

  const openAddColumn = () => setIsAddColumnOpen(true);
  const closeAddColumn = () => setIsAddColumnOpen(false);

  useEffect(() => {
    if (stateFilter === '0') {
      setFilterValue('');
    } else {
      setFilterValue(stateFilter);
    }
  }, [dispatch, stateFilter]);

  useEffect(() => {
    if (data) {
      setDataQuery(data);
    }
    console.log('setData...:>> ', dataQuery);
  }, [data, dataQuery]);

  return (
    <MainWrapper index={dataQuery?.background}>
      <MainContainer>
        <HeaderDashboard filter={setFilterValue} title={data?.title} />

        <ColumnsWrapper
          cols={!dataQuery?.content ? 1 : dataQuery?.content?.length + 1}
        >
          {dataQuery?.content?.map(
            ({ _id: columnId, title: columnTitle, cards }, index) => (
              <Column
                key={columnId}
                columnData={dataQuery.content[index]}
                columnTitle={columnTitle}
                columnId={columnId}
                cards={cards}
              />
            )
          )}

          <ButtonAdd onClick={openAddColumn}></ButtonAdd>
        </ColumnsWrapper>
        {isAddColumnOpen ? (
          <AddColumn
            modalType={'Add column'}
            open={isAddColumnOpen}
            boardId={boardId}
            close={closeAddColumn}
          />
        ) : (
          <></>
        )}
      </MainContainer>
    </MainWrapper>
  );
};

export default ScreensPage;
