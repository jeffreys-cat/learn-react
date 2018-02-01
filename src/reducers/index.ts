import { combineReducers } from 'redux';
import * as counter from './counter';

const counterReducers = combineReducers({
    ...counter
});

export default counterReducers;
