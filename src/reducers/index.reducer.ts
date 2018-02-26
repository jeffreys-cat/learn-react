import { combineReducers } from 'redux';

import * as loginReducer from '../containers/login/login.reducer';
import * as appleBasketReducer from '../containers/index/apple/apple.reducer';
import * as counter from '../containers/index/counter/counter.reducer';

const rootReducers = combineReducers({
    ...counter,
    ...loginReducer,
    ...appleBasketReducer
});

export default rootReducers;
