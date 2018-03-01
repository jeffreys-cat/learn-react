import * as mutation from './github-user.mutation';
import * as userActions from './github-user.action';

import { http } from './../../../utils/http';
const searchUser$ = (username, page) => {
    return http.get(`https://api.github.com/search/users?q=${username}&page=${page}`, {
        hasBaseUrl: false
    });
};

export const searchUsersEpic = action$ => {
    return action$
      .ofType(mutation.FETCH_GITHUB_SEARCH_USER_LOADING)
      .mergeMap(e => {
        return searchUser$(e.payload.username, e.payload.page)
          .map(list => userActions.searchUsersSuccessAction(list))
          .catch(error => {
                userActions.searchUsersFailedAction();
                return error;
          });
      });
  };