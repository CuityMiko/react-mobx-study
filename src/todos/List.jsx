import React, {Component, Fragment} from 'react';
import {Divider, List} from 'antd';
import {inject, observer} from 'mobx-react';
import {toJS} from 'mobx';

import TodoItem from './Item';

@inject('TodoStore') 
@observer
class TodoList extends Component {
    componentDidMount() {
        const {TodoStore: {getInitData}} = this.props;
        getInitData();
    }

    deleteTodo = (id) => {
        const {TodoStore: {removeTodo}} = this.props;
        removeTodo(id);
    }

    completeTodo = (id) => {
        const {TodoStore: {updateTodo}} = this.props;
        updateTodo(id);
    }

    render() {
        const {TodoStore:{todoList}} = this.props;
        return (
            <Fragment>
                <Divider dashed={true}>todos</Divider>
                <List
                    size="small"
                    bordered
                    dataSource={toJS(todoList)}
                    renderItem={item => (
                        <TodoItem item={item} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo}/>
                    )}
                />
            </Fragment>
        )
    }
}

export default TodoList;