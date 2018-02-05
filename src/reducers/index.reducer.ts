import { combineReducers } from 'redux';
import * as counter from './counter.reducer';
import * as loginReducer from './login.reducer';

const rootReducers = combineReducers({
    ...counter,
    ...loginReducer
});

export default rootReducers;
