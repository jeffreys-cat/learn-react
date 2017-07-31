import * as React from 'react';
import Todo from '../todo/todo';
import { ITodoListProp } from './tolist.model';

export default class TodoList extends React.Component<ITodoListProp, {}> {
    render() {
        console.log(this.props);
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo}
                          key={index}
                          onClick={() => this.props.onTodoClick(index)} />
                )}
            </ul>
        );
    }
}
