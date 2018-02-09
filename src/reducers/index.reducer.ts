import { combineReducers } from 'redux';
import * as counter from './counter.reducer';
import * as loginReducer from './login.reducer';
import * as appleBasketReducer from './apple-basket.reducer';

const rootReducers = combineReducers({
    ...counter,
    ...loginReducer,
    ...appleBasketReducer
});

export default rootReducers;
