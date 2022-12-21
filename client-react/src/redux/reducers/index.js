import { combineReducers } from 'redux';
import { dataListReducer, 
    // selectedListReducer 
} from './dataReducer';
const reducres = combineReducers({
    allData: dataListReducer,
    // details: selectedListReducer
})

export default reducres;