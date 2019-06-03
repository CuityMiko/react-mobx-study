import {takeEvery, put} from 'redux-saga/effects';
import * as actionTypes from './action.types';
import * as actionCreater from './actions';
import axios from 'axios';

function* getInitTodoList(initdata) {
    try {
        // console.log(initdata.data);
        const result = yield axios.get('/api/todoList.json');
        yield sessionStorage.setItem('todos', JSON.stringify(result.data));
        yield put(actionCreater.getTodoInitList(result.data));
    } catch (error) {
        console.log(error, '--get todo list error---');
    }
}

function* todoSaga() {
    yield takeEvery(actionTypes.GETTODOLIST, getInitTodoList)
}

export default todoSaga;