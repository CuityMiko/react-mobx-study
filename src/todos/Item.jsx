import React from 'react';
import {List, Icon, Radio} from 'antd';

export default (props) => {
    const {item} = props;
    return (
        <List.Item key={item.get('id')}>
            <List.Item.Meta avatar={
                <Radio></Radio>
            } title={
                <span className={item.get('isComplete')?'complete': ''}>{item.get('content')}</span>
            }>
            </List.Item.Meta>
            <div>
                <Icon type="close" style={{cursor: "pointer"}}/>
            </div>
        </List.Item>
    )
}