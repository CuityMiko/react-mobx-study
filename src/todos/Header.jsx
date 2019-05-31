import React, {Component, Fragment} from 'react';
import {Input, Button} from 'antd';
import {connect} from 'react-redux';
import {actions} from '../store/modules/todos';

const mapStates = null;
const mapActions = {
    addTodo: actions.addTodoItem
}

@connect(mapStates, mapActions)
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
        if (inputVal) {
            this.props.addTodo(inputVal);
            this.setState({inputVal: ''});
        }
        
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