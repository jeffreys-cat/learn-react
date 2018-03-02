import { Action } from 'redux';
import * as mutation from './github-user.mutation';

interface ISearchUserAction extends Action {
    payload: ISearchUserPayload;
    error: any;
}

interface ISearchUserPayload {
    total_count: number;
    users: any[];
    incomplete_results: boolean;
}

const InitializedSearchUserState = {
    loading: false,
    total: 0,
    data: [],
    error: ''
};

export const searchUserReducer = (state = InitializedSearchUserState, action: ISearchUserAction) => {
    switch (action.type) {
        case mutation.FETCH_GITHUB_SEARCH_USER_LOADING:
            return {
                ...state,
                loading: true
            };
        case mutation.FETCH_GITHUB_SEARCH_USER_SUCCESS:
            return {
                loading: false,
                total: action.payload.total_count,
                data: action.payload.users
            };
        case mutation.FETCH_GITHUB_SEARCH_USER_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export const getUserFollowersReducer = (state = InitializedSearchUserState, action: any) => {
    switch (action.type) {
        case mutation.FETCH_GITHUB_USER_FOLLOWERS_LOADING:
            return {
                ...state,
                loading: true
            };
        case mutation.FETCH_GITHUB_USER_FOLLOWERS_SUCCESS:
            return {
                loading: false,
                data: action.payload,
                total: action.payload.length
            };
        case mutation.FETCH_GITHUB_USER_FOLLOWERS_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        default: 
            return state;
    }
};
