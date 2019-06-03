import React, {PureComponent} from 'react';
import {Divider, Tag, Button} from 'antd';
import {FooterWrapper} from './styles';

const { CheckableTag } = Tag;

class Footer extends PureComponent {
    render() {
        return (
            <FooterWrapper>
                <span>共</span>
                <strong>3</strong>
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