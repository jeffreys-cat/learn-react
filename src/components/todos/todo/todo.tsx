import * as React from 'react';
import { IToDoProps } from './todo.model';

export default class Todo extends React.Component<IToDoProps, {}> {
    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{
                textDecoration: this.props.completed ? 'line-through' : 'none',
                cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                {this.props.text}
            </li>
        );
    }
}
