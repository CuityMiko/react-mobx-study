import React from 'react';
import {List, Icon, Radio} from 'antd';

export default (props) => {
    const {item, deleteTodo, completeTodo} = props;
    return (
        <List.Item key={item.get('id')}>
            <List.Item.Meta avatar={
                <Radio checked={item.get('isComplete')} onClick={() => completeTodo(item.get('id'))}></Radio>
            } title={
                <span className={item.get('isComplete')?'complete': ''}>{item.get('content')}</span>
            }>
            </List.Item.Meta>
            <div>
                <Icon type="close" style={{cursor: "pointer"}} onClick={() => deleteTodo(item.get('id'))}/>
            </div>
        </List.Item>
    )
}