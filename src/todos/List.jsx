import React, {Component, Fragment} from 'react';
import {Divider, List} from 'antd';
import {inject, observer} from 'mobx-react';
import {toJS} from 'mobx';

import TodoItem from './Item';

@inject('TodoStore') 
@observer
class TodoList extends Component {
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
                        <TodoItem item={item}/>
                    )}
                />
            </Fragment>
        )
    }
}

export default TodoList;