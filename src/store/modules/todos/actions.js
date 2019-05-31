import {fromJS} from 'immutable';
import axios from 'axios';
import * as actionTypes from './action.types';

const initTodoList = (data) => ({
    type: actionTypes.GETTODOLIST,
    data: fromJS(data)
})

export const addTodoItem = (todoitem) => ({
    type: actionTypes.ADDTODOITEM,
    data: todoitem
})

export const deleteTodoItem = (id) => ({
    type: actionTypes.DELETETODOITEM,
    data: id
})

export const getTodosByStatus = (status) => ({
    type: actionTypes.GETTODOSBYSTATUS,
    data: status
})

export const updateTodoItem = (id) => ({
    type: actionTypes.UPDATETODOITEM,
    data: id
})

export const clearTodos = () => ({
    type: actionTypes.CLEARTODOS
})

export const getTodoList = () => {
    return dispatch => {
        axios.get('/api/todoList.json').then(res => {
            sessionStorage.setItem('todos', JSON.stringify(res.data));
            dispatch(initTodoList(res.data))
        })
    }
}