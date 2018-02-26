import { Dispatch } from 'react-redux';
import { http } from '../../../utils/http';
const actions = {
    pickApple: () => {
        return function (dispatch: Dispatch<any>, getState: Function) {
            /** 如果正在摘苹果，则结束这个thunk, 不执行摘苹果 */
            if (getState().appleBasketReducer.isPicking) {
                return;
            }

            dispatch(actions.beginPickApple);

            http.get('/test/girls')
            .subscribe(
                (res) => {
                    const weight = Math.floor(200 + Math.random() * 50);
                    dispatch(actions.donePickApple(weight));
                },
                error => {
                    dispatch(actions.failPickApple(error.statusText));
                }
            );
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