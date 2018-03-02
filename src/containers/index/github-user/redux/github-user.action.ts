import * as mutations from './github-user.mutation';

export const searchUsersAction = (username, page = 1) => {
    return {
        type: mutations.FETCH_GITHUB_SEARCH_USER_LOADING,
        payload: {
            username,
            page
        }
    };
};

export const searchUsersSuccessAction = users => {
    return {
        type: mutations.FETCH_GITHUB_SEARCH_USER_SUCCESS,
        payload: {
            total_count: users.total_count,
            users: users.items
        }
    };
};

export const searchUsersFailedAction = () => {
    return {
        type: mutations.FETCH_GITHUB_SEARCH_USER_FAILURE,
        error: 'NOT FOUND THIS USER'
    };
};

export const getUserFollowersAction = (username: string, page = 1) => {
    return {
        type: mutations.FETCH_GITHUB_USER_FOLLOWERS_LOADING,
        payload: {
            username,
            page
        }
    };
};

export const getUserFollowersSuccessAction = data => {
    return {
        type: mutations.FETCH_GITHUB_USER_FOLLOWERS_SUCCESS,
        payload: data
    };
};

export const getUserFollowersFailureAction = error => {
    return {
        type: mutations.FETCH_GITHUB_USER_FOLLOWERS_FAILURE,
        error: error
    };
};