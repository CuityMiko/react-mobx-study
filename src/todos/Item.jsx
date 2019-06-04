import React from 'react';
import {List, Icon, Radio} from 'antd';

export default (props) => {
    const {item, deleteTodo, completeTodo} = props;
    return (
        <List.Item key={item.id}>
            <List.Item.Meta avatar={
                <Radio checked={item.isComplete} onClick={() => completeTodo(item.id)}></Radio>
            } title={
                <span className={item.isComplete?'complete': ''}>{item.content}</span>
            }>
            </List.Item.Meta>
            <div>
                <Icon type="close" style={{cursor: "pointer"}} onClick={() => deleteTodo(item.id)}/>
            </div>
        </List.Item>
    )
}