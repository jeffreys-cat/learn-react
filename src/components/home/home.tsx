import * as React from 'react';
import './home.scss';
import { IHomeProps, IHomeState } from './home.model';
import { connect } from 'react-redux';
import { counterDispatchToProps } from '../../maps/mapDispatchToProps';
import { counterStateToProps } from '../../maps/mapStateToProps';

class Home extends React.Component<IHomeProps, IHomeState> {
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

export default connect(counterStateToProps, counterDispatchToProps)(Home);  