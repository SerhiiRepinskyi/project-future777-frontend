import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  boards: [],
  boardconfig: null,
  boardId: null,
  boardData: {},
  error: null,
};

const boardsAPISlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    
    setAllBoards: (state, action) => {
      state.boards = action.payload;
      
    },

      setBoardResponse: (state, action) => {
      state.boards.push(action.payload); 
    },

    setBoardId: (state, action) => {
      const { id } = action.payload;
      state.id = id;
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

    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: {},
});

export const { setError, clearError, setBoardData, setAllBoards, setBoardId, setBoardResponse } = boardsAPISlice.actions;

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
