import * as React from 'react';
import './home.scss';
import { autobind } from 'core-decorators';
interface HomeProps extends React.Props<any> {
    name: string;
    enthusiasmLevel: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}
interface HomeState {
    enthusiasmLevel: number;
}
@autobind
export class Home extends React.Component<HomeProps, HomeState> {
    enthusiasmLevel = 1;
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            enthusiasmLevel: 1
        };
    }
    getExclamationMarks(num: number) {
        return Array(num + 1).join('!');
    }
    onIncrement() {
        console.log(this.state.enthusiasmLevel);
        // this.enthusiasmLevel++;
        this.setState({
            enthusiasmLevel: this.state.enthusiasmLevel
        });
    }
    onDecrement() {
        // this.enthusiasmLevel--;
    }
    render() {
        return (
            <div className="hello">
                <div className="greeting">
                     Hello {name + this.getExclamationMarks(this.state.enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={() => this.onDecrement()}>-</button>
                    <button onClick={() => this.onIncrement()}>+</button>
                </div>
            </div>
        );
    }
}
