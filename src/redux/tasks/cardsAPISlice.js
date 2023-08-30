import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  cardData:{},
  selectedCardId: null,  
  selectedColumnId: null, 
  error: null,  
};

const cardsAPISlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    deleteCard:(state, action) => {
      const { id } = action.payload;
      state.cards = state.cards.filter(card => card.id!== id);
    },
    setCardData: (state, action) => {
      state.cardData = { ...state.cardData, ...action.cardData };
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
  setCardData,
  setSelectedColumnId,
  setError,
} = cardsAPISlice.actions;

export default cardsAPISlice;


