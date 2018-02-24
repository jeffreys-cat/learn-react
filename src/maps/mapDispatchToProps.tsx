import { Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import counterActions from '../actions/counter.action';

interface ICounterAction {
    type: string;
}
// Counter
export const counterDispatchToProps = (dispatch: Dispatch<ICounterAction>) => ({
    counterActions: bindActionCreators(counterActions, dispatch)
});

// Login
export const loginDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
    return {
        login: () => dispatch({ type: 'LOGIN' })
    };
};