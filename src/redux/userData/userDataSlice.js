import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  boards: [],
  boardconfig: null,
  boardId: null,
  boardData: {},
  error: null,
  filter: "",
  columns: [],
  columnId: null,
  title: null,
  cards: [],
  cardData: {},
  selectedCardId: null,
  filteredCards: [],
  selectedColumnId: null,
  
};

const  userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {

    setAllBoards: (state, action) => {
      state.boards = action.payload;

    },

    setBoardResponse: (state, action) => {
      state.boards.push(action.payload);
    },

    setBoardId: (state, action) => {
      const { boardId } = action.payload;
      state.boardId = boardId;
    },

    setBoardData: (state, action) => {
      state.boardData = { ...state.boardData, ...action.payload };
    },

    deleteBoard: (state, action) => {
      const { id } = action.payload;
      state.boards = state.boards.filter(board => board.id !== id);
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    clearError: state => {
      state.error = null;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
      },
    
    addColumn: (state, action) => {
      const { ownerId, columnId, columnTitle } = action.payload;
      const boardIndex = state.columns.findIndex(board => board.ownerId === ownerId);
      if (boardIndex !== -1) {
      state.columns.push({ columnId, columnTitle });
      }
    },

    setColumnTitle: (state, action) => {
      state.title = action.payload.title;
    },

    deleteColumn: (state, action) => {
      const { id } = action.payload;
      state.columns = state.columns.filter(column => column._id !== id);
      },
     setCards: (state, action) => {
      state.cards = action.payload;
    },
    deleteCard: (state, action) => {
      const { id } = action.payload;
      state.cards = state.cards.filter(card => card.id !== id);
    },
    setCardData: (state, action) => {
      state.cardData = { ...state.cardData, ...action.cardData };
    },
    setSelectedCardId: (state, action) => {
      state.selectedCardId = action.payload;
    },
    setfilterCards: (state, action) => {
      const { filterParameter } = action.payload;
      state.filteredCards = state.cards.filter(
        card => card.someProperty === filterParameter
      );
      //filterCards({ filterParameter: 'someValue' }) => по ідеї має спрацювати, не встигла перевірити. Раптом що змінюй.
    },
    setSelectedColumnId: (state, action) => {
      state.selectedColumnId = action.payload;
    },
  },
});

export const { setError,
    setFilter,
    clearError,
    setBoardData,
    setAllBoards,
    setBoardId,
    setBoardResponse,
    addColumn,
    deleteColumn,
    setColumnTitle,
    setCards,
    setCardData,
    setSelectedColumnId,
    deleteCard,} =  userDataSlice.actions;

export default userDataSlice.reducer;


// const addColumn = async (req, res) => {
//   const { id: owner } = req.params;
//   // Додамо перевірку на власника
//   if (owner !== req.user._id) {
//     return res.status(403).json({ message: 'Access denied' });
//   }

//   const result = await Column.create({ ...req.body, owner });
//   if (!result) {
//     throw HttpError(404, ERR_NOT_FOUND(id));
//   }
//   const { _id: columnId, title: columnTitle } = result;
//   const board = await Board.findById(owner);

//   board.columns.push({ columnId, columnTitle });
//   await board.save();
//   res.status(201).json(result);
// };