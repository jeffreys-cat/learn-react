import { Dispatch } from 'react-redux';

export const counterDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' })
    };
};
