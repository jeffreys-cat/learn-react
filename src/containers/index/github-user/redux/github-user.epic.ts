import * as mutation from './github-user.mutation';
import * as userActions from './github-user.action';
import { http } from './../../../../utils/http';

const searchUser$ = (username, page) => {
    username = username.trim();
    return http.get(`https://api.github.com/search/users?q=${username}&page=${page}`, {
        hasBaseUrl: false
    });
};

const getUserFollowers$ = (username: string, page: number) => {
    username = username.trim();    
    return http.get(`https://api.github.com/users/${username}/followers?page=${page}`, {
        hasBaseUrl: false
    });
};

export const searchUsersEpic = action$ => {
    return action$
      .ofType(mutation.FETCH_GITHUB_SEARCH_USER_LOADING)
      .debounceTime(500)
      .mergeMap(e => {
        return searchUser$(e.payload.username, e.payload.page)
          .map(list => userActions.searchUsersSuccessAction(list))
          .catch(error => {
                userActions.searchUsersFailedAction();
                return error;
        });
    });
};

export const getUserFollowersEpic = actions$ => {
    return actions$
        .ofType(mutation.FETCH_GITHUB_USER_FOLLOWERS_LOADING)
        .debounceTime(500)
        .mergeMap(e => {
            return getUserFollowers$(e.payload.username, e.payload.page)
                .map(list => userActions.getUserFollowersSuccessAction(list))
                .catch(error => {
                    userActions.getUserFollowersFailureAction(error);
                    return error;
                });
        });
};