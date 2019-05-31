import {combineReducers} from 'redux-immutable';
import {reducers as TodoReducers} from './modules/todos/index'

export default combineReducers ({
    todo: TodoReducers
})