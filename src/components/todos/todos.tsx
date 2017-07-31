import * as React from 'react';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../../actions/todos.action';
import Footer from './footers/footers';
import TodoList from './todolist/todolist';
import AddTodo from './addtodo/AddTodo';
import { ITodoProps } from './todos.model';
import { connect } from 'react-redux';

export class Todos extends React.Component<ITodoProps, {}> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        console.log(this.props);
        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                        dispatch(addTodo(text))
                    } />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index =>
                        dispatch(completeTodo(index))
                    } />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter =>
                        dispatch(setVisibilityFilter(nextFilter))
                    } />
            </div>
        );
    }
}

function selectTodos(todos: any, filter: any) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

function select(state: any) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Todos);
