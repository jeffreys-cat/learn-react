import { Dispatch } from 'react-redux';

interface ICounterAction {
    type: string;
}

export const counterDispatchToProps = (dispatch: Dispatch<ICounterAction>, ownProps: any) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' })
    };
};

export const loginDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
    return {
        login: () => dispatch({ type: 'LOGIN' })
    };
};