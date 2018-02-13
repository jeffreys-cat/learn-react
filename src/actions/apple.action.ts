import { Dispatch } from 'react-redux';
import axios, { AxiosResponse } from 'axios';
import { IResult } from '../models/http.model';
import { IAppleResponse } from './appleResponse.model';
const actions = {
    pickApple: () => {
        return function (dispatch: Dispatch<any>, getState: Function) {
            /** 如果正在摘苹果，则结束这个thunk, 不执行摘苹果 */
            if (getState().appleBasketReducer.isPicking) {
                return;
            }

            dispatch(actions.beginPickApple);

            axios.get('http://localhost:8081/test/girls')
            .then((res: AxiosResponse<IResult<IAppleResponse>>) => {
                if (res.data.code === 0) {
                    const weight = Math.floor(200 + Math.random() * 50);
                    dispatch(actions.donePickApple(weight));
                } else {
                    dispatch(actions.failPickApple);
                }
            })
            .catch(error => {
                dispatch(actions.failPickApple(error.statusText));
            });
        };
    },
    beginPickApple: () => ({
        type: 'apple/BEGIN_PICK_APPLE'
    }),
    donePickApple: (appleWeight: any) => ({
        type: 'apple/DONE_PICK_APPLE',
        payload: appleWeight
    }),
    failPickApple: (errMsg: any) => ({
        type: 'apple/FAIL_PICK_APPLE', 
        payload: new Error(errMsg),
        error: true
    }),
    eatApple: (appleId) => ({
        type: 'apple/EAT_APPLE',
        payload: appleId
    })
};

export default actions;