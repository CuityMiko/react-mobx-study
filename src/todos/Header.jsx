import React, {Component, Fragment} from 'react';
import {Input, Button} from 'antd';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        }
    }
    /**
     * 点击添加
     */
    handleClick = () => {
        const {inputVal} = this.state;
    }
    render() {
        const {inputVal} = this.state;
        return (
            <Fragment>
                <Input placeholder="请输入..." style={{"width": "200px"}} value={inputVal} onChange={e => this.setState({inputVal: e.target.value})}/>
                <Button type="default" style={{marginLeft: '15px'}} onClick={this.handleClick}>添 加</Button>
            </Fragment>
        )
    }
}

export default Header;