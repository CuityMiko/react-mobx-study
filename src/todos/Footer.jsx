import React, {PureComponent} from 'react';
import {Divider, Tag, Button} from 'antd';
import {FooterWrapper} from './styles';
import {connect} from 'react-redux';
import { actions } from '../store/modules/todos';

const { CheckableTag } = Tag;

const mapStates = state => ({
    todos: state.getIn(['todo', 'todos']),
    status: state.getIn(['todo', 'status'])
})
const mapActions = {
    getTodosByStatus: actions.getTodosByStatus,
    clearTodos: actions.clearTodos
};
@connect(mapStates, mapActions)
class Footer extends PureComponent {
    changeStatus = (status) => {
        this.props.getTodosByStatus(status);
    }
    clearTodos = () => {
        this.props.clearTodos();
    }
    render() {
        const {todos, status} = this.props;
        return (
                todos ? <FooterWrapper>
                <span>共</span>
                <strong>{todos.size}</strong>
                <span>项</span>
                <Divider type="vertical"/>
                <CheckableTag checked={status == 0} onChange={() => this.changeStatus(0)}>全部</CheckableTag>
                <Divider type="vertical"/>
                <CheckableTag checked={status == 1} onChange={() => this.changeStatus(1)}>进行中</CheckableTag>
                <Divider type="vertical"/>
                <CheckableTag checked={status == 2} onChange={() => this.changeStatus(2)}>已完成</CheckableTag>
                <Button type="default" icon="delete" size="small" style={{float: "right"}} onClick={this.clearTodos}>清 空</Button>
                <Divider style={{marginTop: "15px"}}/>
            </FooterWrapper> : null
        )
    }
}

export default Footer;