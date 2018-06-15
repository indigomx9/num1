import { combineReducers } from 'redux';
import numberReducer from './numberReducer';
import resultReducer from './resultReducer';

let rootReducer = combineReducers({
    num: numberReducer,
    res: resultReducer
});

export default rootReducer;

