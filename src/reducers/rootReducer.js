import { combineReducers } from 'redux';
import numberReducer from './numberReducer';
import resultReducer from './resultReducer';

let rootReducer = combineReducers({
    ctr: numberReducer,
    res: resultReducer
});

export default rootReducer;

