import { fromJS } from 'immutable';
import { IAppleBasketState } from './apple.model';
// import appleBasket from '../components/apple/apple-basket';

const InitialState: IAppleBasketState = {
    isPicking: false,
    newAppleId: 3,
    apples: [
        {
            id: 0,
            weight: 233,
            isEaten: false
        },
        {
            id: 1,
            weight: 235,
            isEaten: true
        },
        {
            id: 2,
            weight: 256,
            isEaten: false
        }
    ]
};

export const appleBasketReducer = (state: IAppleBasketState = InitialState, action: any) => {
    switch (action.type) {
        case 'apple/BEGIN_PICK_APPLE':
            return fromJS(state).set('isPicking', true).toJS();
        case 'apple/DONE_PICK_APPLE':
            let newApple =  {
                id: state.newAppleId,
                weight: action.payload,
                isEaten: false
            };
            return fromJS(state).update('apples', list => list.push(newApple))
                                .set('newAppleId', state.newAppleId + 1)
                                .set('isPicking', false)
                                .toJS();
        case 'apple/FAIL_PICK_APPLE':
            return fromJS(state).set('isPicking', false).toJS();
        case 'apple/EAT_APPLE':
            return fromJS(state).setIn(['apples', action.payload, 'isEaten'], true).toJS();
        default:
            return state;
    }
};
