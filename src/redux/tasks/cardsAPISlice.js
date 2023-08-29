import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],      // Масив карток
  selectedCardId: null,  // ID вибраної картки
  selectedColumnId: null, // ID колонки, до якої належить вибрана картка
  error: null,    // Об'єкт помилки
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setSelectedCardId: (state, action) => {
      state.selectedCardId = action.payload;
    },
    setSelectedColumnId: (state, action) => {
      state.selectedColumnId = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCards,
  setSelectedCardId,
  setSelectedColumnId,
  setError,
} = cardsSlice.actions;

export default cardsSlice.reducer;


