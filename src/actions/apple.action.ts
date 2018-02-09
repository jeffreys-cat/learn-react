import { Dispatch } from 'react-redux';
const actions = {
    pickApple: () => {
        return function (dispatch: Dispatch<any>, getState: Function) {
            /** 如果正在摘苹果，则结束这个thunk, 不执行摘苹果 */
            if (getState().appleBasketReducer.isPicking) {
                return;
            }

            dispatch(actions.beginPickApple);

            fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
                .then((res: any) => {
                    if (res.status !== 200) {
                        dispatch(actions.failPickApple(res.statusText));
                    } 

                    const weight = Math.floor(200 + Math.random() * 50);
                    dispatch(actions.donePickApple(weight));

                }).catch(e => {
                dispatch(actions.failPickApple(e.statusText));
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