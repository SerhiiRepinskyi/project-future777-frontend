import { combineReducers } from 'redux';
import { boardsAPI} from 'Services/API_Component';


const userDataComb = combineReducers({
boards: boardsAPI.reducer,

});

export default userDataComb;