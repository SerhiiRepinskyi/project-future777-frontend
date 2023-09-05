import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  boards: [],
  boardsIdArray: [],
  boardconfig: null,
  boardId: null,
  boardData: {},
  error: null,
  filter: "",
};

const boardsAPISlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {

    setAllBoards: (state, action) => {
      state.boards = action.payload;
    },

    setBoardsIdArray: (state, action) => {
      state.boardsIdArray = action.payload;
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
  },
 
});

export const { setError,setFilter, clearError, setBoardData, setAllBoards, setBoardsIdArray, setBoardId, setBoardResponse } = boardsAPISlice.actions;

export default boardsAPISlice.reducer;







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
