import React, {Component} from 'react';
import {Divider, Tag, Button} from 'antd';
import {FooterWrapper} from './styles';
import {inject, observer} from 'mobx-react';

const { CheckableTag } = Tag;

@inject("TodoStore")
@observer
class Footer extends Component {
    render() {
        const {TodoStore: {unDoCount}} = this.props;
        return (
            <FooterWrapper>
                <span>共</span>
                <strong>{unDoCount}</strong>
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