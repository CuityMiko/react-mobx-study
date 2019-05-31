import {fromJS, } from 'immutable';
import * as actionTtpes from './action.types';

const initState = fromJS({
    todos: []
})

export default (state = initState, action) => {
    switch (action.type) {
        case actionTtpes.GETTODOLIST: // 获取列表
            return state.set('todos', action.data);
        case actionTtpes.ADDTODOITEM: // 新增
            let todoItem = {
                id: parseInt(Math.random() * 10000), 
                created: new Date().getTime(), 
                isComplete: false,
                content: action.data
            }
            return state.set('todos', state.get('todos').push(fromJS(todoItem)));
        case actionTtpes.DELETETODOITEM:
            let _todos = state.get('todos');
            let _id = action.data;
            let _index = _todos.findIndex(c => c.id == _id);
            let newtodos = _todos.splice(_index, 1);
            return state.set('todos', newtodos);
        default:
            return state;
    }
}