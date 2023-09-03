import { combineReducers } from 'redux';
import {cardsAPI, columnsAPI, userAPI } from 'Services/API_Component';


const userDataSlice = combineReducers({
  user: userAPI.reducer,
  columns: columnsAPI.reducer,
  cards: cardsAPI.reducer,
});

export default userDataSlice;