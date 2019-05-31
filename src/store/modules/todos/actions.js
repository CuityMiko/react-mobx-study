import {fromJS} from 'immutable';
import axios from 'axios';
import * as actionTypes from './action.types';

const initTodoList = (data) => ({
    type: actionTypes.GETTODOLIST,
    data: fromJS(data)
})

export const getTodoList = () => {
    return dispatch => {
        axios.get('/api/todoList.json').then(res => {
            dispatch(initTodoList(res.data))
        })
    }
}