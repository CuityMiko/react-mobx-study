import React, {Component, Fragment} from 'react';
import {Divider, List} from 'antd';
import {connect} from 'react-redux';
import {actions} from '../store/modules/todos';

import TodoItem from './Item';

const mapStates = state => ({
    todos: state.getIn(['todo', 'todos'])
})
const mapActions = {
    getTodoList: actions.getTodoList,
    deleteTodoItem: actions.deleteTodoItem,
    updateTodoItem: actions.updateTodoItem
}
@connect(mapStates, mapActions)
class TodoList extends Component {
    componentDidMount() {
        this.props.getTodoList();
    }

    deleteTodo = (id) => {
        this.props.deleteTodoItem(id);
    }

    completeTodo = (id) => {
        this.props.updateTodoItem(id);
    }

    render() {
        const {todos} = this.props;
        return (
            <Fragment>
                <Divider dashed={true}>todos</Divider>
                <List
                    size="small"
                    bordered
                    dataSource={todos}
                    renderItem={item => <TodoItem item={item} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo}/>}
                />
            </Fragment>
        )
    }
}

export default TodoList;