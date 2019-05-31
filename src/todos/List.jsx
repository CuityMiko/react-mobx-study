import React, {Component, Fragment} from 'react';
import {Divider, List} from 'antd';
import {connect} from 'react-redux';
import {actions} from '../store/modules/todos';

import TodoItem from './Item';

const mapStates = state => ({
    todos: state.getIn(['todo', 'todos'])
})
const mapActions = {
    getTodoList: actions.getTodoList
}
@connect(mapStates, mapActions)
class TodoList extends Component {
    componentDidMount() {
        this.props.getTodoList();
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
                    renderItem={item => <TodoItem item={item} />}
                />
            </Fragment>
        )
    }
}

export default TodoList;