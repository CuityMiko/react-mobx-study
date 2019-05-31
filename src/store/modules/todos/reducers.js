import {fromJS} from 'immutable';
import * as actionTtpes from './action.types';

const initState = fromJS({
    todoItem: {
        id: 0, // parseInt(Math.random() * 10000)
        content: '',
        created: new Date().getTime(),
        isComplete: false
    },
    todos: []
})

export default (state = initState, action) => {
    switch (action.type) {
        case actionTtpes.GETTODOLIST: // 获取列表
            return state.set('todos', action.data)
        default:
            return state;
    }
}