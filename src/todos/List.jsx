import React, {Component, Fragment} from 'react';
import {Divider, List} from 'antd';

import TodoItem from './Item';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, content: '运动', isComplete: false},
                {id: 2, content: '练习', isComplete: false},
                {id: 3, content: '写代码', isComplete: true}
            ],
            checked: true
        }
    }
    
    handleChange = (checked) => {
        this.setState({ checked });
    }

    render() {
        const {todos, checked} = this.state;
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