import * as React from 'react';
import { IAddTodoProps } from './AddTodo.model';

export default class AddTodo extends React.Component<IAddTodoProps, {}> {
    todo;
    componentDidMount() {
        // var component = this.todo;
        // ...do something with component
    }
    render() {
        return (
            <div>
                <input type="text" ref={(c) => {this.todo = c; }} />
                <button onClick={(e) => this.handleClick(e)}>
                Add
                </button>
            </div>
        );
    }

    handleClick(event: React.FormEvent<HTMLButtonElement>) {
        const node = this.refs.input as HTMLButtonElement;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}
