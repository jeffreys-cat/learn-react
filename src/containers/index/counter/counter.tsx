import * as React from 'react';
import './counter.scss';
import { IHomeProps, IHomeState } from './counter.model';
import { connect } from 'react-redux';
import { Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import counterActions from './counter.action';

class Counter extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            enthusiasmLevel: 1
        };
    }
    // render
    render() {
        const { onDecrement, onIncrement } = this.props.counterActions;
        return (
            <div className="hello">
                <div className="greeting">
                    {this.props.enthusiasmLevel}
                     {/* Hello {name + this.getExclamationMarks(this.state.enthusiasmLevel)} */}
                </div>
                <div className="button-group">
                    <button className="button-material" onClick={onDecrement}>-</button>
                    <button className="button-material" onClick={onIncrement}>+</button>
                </div>
                <button className="button-material">Hello</button>
            </div>
        );
    }
}

// Counter
const counterDispatchToProps = (dispatch: Dispatch<any>) => ({
    counterActions: bindActionCreators(counterActions, dispatch)
});

const counterStateToProps = (state: any): any => {
    return {
        enthusiasmLevel: state.counter
    };
};

export default connect(counterStateToProps, counterDispatchToProps)(Counter);  