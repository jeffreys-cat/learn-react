import { searchUsersEpic } from './../containers/index/github-user/redux/github-user.epic';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
    searchUsersEpic
);
