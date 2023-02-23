import { combineReducers } from 'redux';
import rdcUser from './rdcUser';

const rootReducer = combineReducers({
    userManage: rdcUser,
});

export default rootReducer;
