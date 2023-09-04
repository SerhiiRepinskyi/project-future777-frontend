import { combineReducers } from 'redux';
import { boardsAPI, cardsAPI, columnsAPI,} from 'Services/API_Component';


const userDataComb = combineReducers({
boards: boardsAPI.reducer,
columns: columnsAPI.reducer,
cards: cardsAPI.reducer,
});

export default userDataComb;