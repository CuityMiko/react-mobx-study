import React, {Component} from 'react';
import {Divider, Tag, Button} from 'antd';
import {FooterWrapper} from './styles';
import {inject, observer} from 'mobx-react';

const { CheckableTag } = Tag;

@inject("TodoStore")
@observer
class Footer extends Component {
    // 改变状态
    changeStatus = (status) => {
        const {TodoStore: {getStatus}} = this.props;
        getStatus(status);
    }

    clearTodos = () => {
        const {TodoStore: {clearTodo}} = this.props;
        clearTodo();
    }

    render() {
        const {TodoStore: {status, unDoCount, doCount, todoCount}} = this.props;
        return (
            <FooterWrapper>
                <span>共</span>
                <strong>{status == 0 ? todoCount : status == 1 ? unDoCount : doCount}</strong>
                <span>项</span>
                <Divider type="vertical"/>
                <CheckableTag checked={status == 0} onChange={() => this.changeStatus(0)}>全部</CheckableTag>
                <Divider type="vertical"/>
                <CheckableTag checked={status == 1} onChange={() => this.changeStatus(1)}>进行中</CheckableTag>
                <Divider type="vertical"/>
                <CheckableTag checked={status == 2} onChange={() => this.changeStatus(2)}>已完成</CheckableTag>
                <Button type="default" icon="delete" size="small" style={{float: "right"}} onClick={this.clearTodos}>清 空</Button>
                <Divider style={{marginTop: "15px"}}/>
            </FooterWrapper>
        )
    }
}

export default Footer;