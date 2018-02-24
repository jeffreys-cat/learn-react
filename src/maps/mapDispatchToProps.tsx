import { Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import counterActions from '../actions/counter.action';
import authActions from '../actions/auth.action';

interface ICounterAction {
    type: string;
}
// Counter
export const counterDispatchToProps = (dispatch: Dispatch<ICounterAction>) => ({
    counterActions: bindActionCreators(counterActions, dispatch)
});

// Login
export const loginDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => ({
    authActions: bindActionCreators(authActions, dispatch)
});