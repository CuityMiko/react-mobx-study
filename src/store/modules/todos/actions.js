import {fromJS} from 'immutable';
import axios from 'axios';
import * as actionTypes from './action.types';

export const getTodoList = (data) => ({
    type: actionTypes.GETTODOLIST,
    data
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

export const getTodoInitList = (data) => ({
    type: actionTypes.GETTODOINITLIST,
    data: fromJS(data)
})