import React, {Component} from 'react';
import {Divider, Tag, Button} from 'antd';
import {FooterWrapper} from './styles';
import {connect} from 'react-redux';

const { CheckableTag } = Tag;

const mapStates = state => ({
    todos: state.getIn(['todo', 'todos'])
})
const mapActions = null;
@connect(mapStates, mapActions)
class Footer extends Component {
    render() {
        const {todos} = this.props;
        return (
            <FooterWrapper>
                <span>共</span>
                <strong>{todos.size}</strong>
                <span>项</span>
                <Divider type="vertical"/>
                <CheckableTag checked={true}>全部</CheckableTag>
                <Divider type="vertical"/>
                <CheckableTag checked={true}>进行中</CheckableTag>
                <Divider type="vertical"/>
                <CheckableTag checked={true}>已完成</CheckableTag>
                <Button type="default" icon="delete" size="small" style={{float: "right"}}>清 空</Button>
                <Divider style={{marginTop: "15px"}}/>
            </FooterWrapper>
        )
    }
}

export default Footer;