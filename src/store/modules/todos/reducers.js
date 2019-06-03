import {fromJS} from 'immutable';
import * as actionTtpes from './action.types';

const initState = fromJS({
    status: 0, // 0: 全部 1: 进行中 2: 已完成
    todos: []
})

/**
 * 根据状态获取数据
 * @param {*} data 
 * @param {*} status 
 */
const getTodoListData = (data, status) => {
    let _todosbyStatus = [];
    switch (status) {
        case 0:
            _todosbyStatus = data;
            break;
        case 1:
            _todosbyStatus = data.filter(c => !c.isComplete);
            break;
        case 2:
            _todosbyStatus = data.filter(c => c.isComplete);
            break;
        default:
            _todosbyStatus = data;
            break;
    }
    return _todosbyStatus;
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionTtpes.GETTODOINITLIST: // 获取列表
            return state.set('todos', action.data);
        case actionTtpes.ADDTODOITEM: // 新增
            let newtodos1 = JSON.parse(sessionStorage.getItem('todos'));
            let todoItem = {
                id: parseInt(Math.random() * 10000), 
                created: new Date().getTime(), 
                isComplete: false,
                content: action.data
            }
            newtodos1.push(todoItem);
            sessionStorage.setItem('todos', JSON.stringify(newtodos1));
            return state.set('todos', fromJS(getTodoListData(newtodos1, state.get('status'))));
        case actionTtpes.DELETETODOITEM:
            let _todos = JSON.parse(sessionStorage.getItem('todos'));
            let _id = action.data;
            let _index = _todos.findIndex(c => c.id == _id);
            _todos.splice(_index, 1);
            sessionStorage.setItem('todos', JSON.stringify(_todos));
            return state.set('todos', fromJS(getTodoListData(_todos, state.get('status'))));
        case actionTtpes.GETTODOSBYSTATUS: 
            let _newtodos = JSON.parse(sessionStorage.getItem('todos'));
            let _todosbyStatus = getTodoListData(_newtodos, action.data);
            return state.merge({
                'status': fromJS(action.data),
                'todos': fromJS(_todosbyStatus)
            });
        case actionTtpes.UPDATETODOITEM:
            let _currtodos = JSON.parse(sessionStorage.getItem('todos'));
            _currtodos.map(c => {
                if (c.id == action.data) {
                    return c.isComplete = true;
                }
            })
            sessionStorage.setItem('todos', JSON.stringify(_currtodos));
            return state.set('todos', fromJS(getTodoListData(_currtodos, state.get('status'))));
        case actionTtpes.CLEARTODOS:
            sessionStorage.setItem('todos', JSON.stringify([]));
            return state.set('todos', fromJS([]));
        default:
            return state;
    }
}