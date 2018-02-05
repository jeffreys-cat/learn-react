import { Dispatch } from 'react-redux';

export const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' })
    };
};