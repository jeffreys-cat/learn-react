import { combineReducers } from 'redux';
import * as counter from './counter.reducer';

const rootReducers = combineReducers({
    ...counter
});

export default rootReducers;
