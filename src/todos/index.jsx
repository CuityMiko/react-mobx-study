import React, {Component} from 'react';
import {Input, Button, Divider, List, Icon, Tag, Radio} from 'antd';
import {IndexWrapper, FooterWrapper} from './styles';

const { CheckableTag } = Tag;

export default class TODOS extends Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, content: '吃饭'},
                {id: 2, content: '睡觉'},
                {id: 3, content: '写代码'},
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
            <IndexWrapper>
                <Input placeholder="请输入..." style={{"width": "200px"}} />
                <Button type="default" style={{marginLeft: '15px'}}>确 认</Button>
                <Divider dashed={true}>todos</Divider>
                <List
                    size="small"
                    bordered
                    dataSource={todos}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta avatar={
                                <Radio></Radio>
                            } title={item.content}>
                            </List.Item.Meta>
                            <div>
                                <Icon type="close" style={{cursor: "pointer"}}/>
                            </div>
                        </List.Item>
                    )}
                />
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
            </IndexWrapper>
        )
    }
}