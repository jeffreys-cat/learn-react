// import { searchUserReducer } from './../containers/index/github-user/github-user.reducer';
import { searchUsersEpic } from './../containers/index/github-user/github-user.epic';
import { combineEpics } from 'redux-observable';
// import { createEpicMiddleware, combineEpics } from 'redux-observable';
// import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootEpic = combineEpics(
    searchUsersEpic
);

// const reducer = combineReducers({
//     searchUserReducer
// });

// const epicMiddleware = createEpicMiddleware(rootEpic);

// const configureStore = () => createStore(
//     reducer,
//     composeEnhancers(
//         applyMiddleware(epicMiddleware)
//     )
// );

// export default configureStore;
