import { appleService } from './apple.service';
import { Dispatch } from 'react-redux';

const actions = {
    pickApple: () => {
        return function (dispatch: Dispatch<any>, getState: Function) {
            // 如果正在摘苹果，则结束这个thunk, 不执行摘苹果
            if (getState().appleBasketReducer.isPicking) {
                return;
            }
            // Dispatch 开始摘苹果 Action
            dispatch(actions.beginPickApple);
            // 请求Server
            appleService.pickApple()
                .subscribe(
                    (res) => {
                        const weight = Math.floor(200 + Math.random() * 50);
                        // Dispatch 摘苹果完成 Action
                        dispatch(actions.donePickApple(weight));
                    },
                    error => {
                        // Dispatch 摘苹果失败 Action
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