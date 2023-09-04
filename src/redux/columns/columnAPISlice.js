import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  columns: [],
  id: null,
  title: null,
  boardId: null,
  error: null,
};

const columnsAPISlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumn: (state, action) => {
      const { ownerId, columnId, columnTitle } = action.payload;
      const boardIndex = state.columns.findIndex(board => board.ownerId === ownerId);
      if (boardIndex !== -1) {
        const newColumn = { columnId, columnTitle };
        state.columns[boardIndex].columns.push(newColumn);
      }
    },

    setColumnTitle: (state, action) => {
      state.title = action.payload.title;
    },

    deleteColumn: (state, action) => {
      const { id } = action.payload;
      state.columns = state.columns.filter(column => column._id !== id);
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
  
});

export const { setError, clearError } = columnsAPISlice.actions;

export default columnsAPISlice;
