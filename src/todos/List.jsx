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
    deleteTodoItem: actions.deleteTodoItem
}
@connect(mapStates, mapActions)
class TodoList extends Component {
    componentDidMount() {
        this.props.getTodoList();
    }

    deleteTodo = (id) => {
        this.props.deleteTodoItem(id);
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
                    renderItem={item => <TodoItem item={item} deleteTodo={this.deleteTodo}/>}
                />
            </Fragment>
        )
    }
}

export default TodoList;