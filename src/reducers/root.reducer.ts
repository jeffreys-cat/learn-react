import { combineReducers } from 'redux';

import { counter } from './../containers/index/counter/counter.reducer';
import { loginReducer } from './../containers/login/login.reducer';
import { appleBasketReducer } from '../containers/index/apple/apple.reducer';
import { searchUserReducer } from '../containers/index/github-user/redux/github-user.reducer';

const rootReducers = combineReducers({
    counter,
    loginReducer,
    appleBasketReducer,
    searchUserReducer
});

export default rootReducers;
