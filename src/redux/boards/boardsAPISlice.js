import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: null,
  id: null,
  boardData: null,
  FormData:null,
  error: null,
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setBoardsList: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    setBoardData: (state, action) => {
      const { boardData } = action.payload;
      state.boardData = boardData;
    },
  },
  extraRedusers: {},
});

export default boardsSlice.reducer;