import {observable, computed, action} from 'mobx';
import axios from 'axios';

class TodoStore {
    @observable todoList = [];

    @observable status = 0; // 0: 全部 1: 进行中 2: 已完成

    @computed
    get unDoCount() { // 进行中
        return this.todoList.filter(t => !t.isComplete).length;
    }

    @computed
    get todoCount() { // 全部
        return this.todoList.length;
    }

    @computed
    get doCount() { // 已完成
        return this.todoList.filter(t => t.isComplete).length;
    }

    @action
    getInitData = async () => {
        try {
            const result = await axios.get('/api/todoList.json');
            sessionStorage.setItem('todos', JSON.stringify(result.data));
            this.todoList = result.data;
        } catch (error) {
            console.log('getInitData error:' + error);
        }
    }

    /**
     * 根据状态获取数据
     * @param {*} data 
     * @param {*} status 
     */
    getTodoListData = (data, status) => {
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

    @action 
    addTodo = (content) => {
        let newtodos = JSON.parse(sessionStorage.getItem('todos'));
        newtodos = [...newtodos, {
            id: parseInt(Math.random() * 10000),
            created: new Date().getTime(),
            content,
            isComplete: false
        }]
        sessionStorage.setItem('todos', JSON.stringify(newtodos));
        this.todoList = this.getTodoListData(newtodos, this.status);
    }

    @action
    getStatus = (status) => {
        this.status = status;
        let newtodos = JSON.parse(sessionStorage.getItem('todos'));
        this.todoList = this.getTodoListData(newtodos, status);
    }

    @action
    clearTodo = () => {
        sessionStorage.setItem('todos', JSON.stringify([]));
        this.todoList = [];
    }

    @action
    removeTodo = (id) => {
        let newtodos = JSON.parse(sessionStorage.getItem('todos'));
        let _index = newtodos.findIndex(c => c.id == id);
        newtodos.splice(_index, 1);
        sessionStorage.setItem('todos', JSON.stringify(newtodos));
        this.todoList = this.getTodoListData(newtodos, this.status);
    }

    @action
    updateTodo = (id) => {
        let _currtodos = JSON.parse(sessionStorage.getItem('todos'));
        _currtodos.map(c => {
            if (c.id == id) {
                return c.isComplete = true;
            }
        })
        sessionStorage.setItem('todos', JSON.stringify(_currtodos));
        this.todoList = this.getTodoListData(_currtodos, this.status);
    }
}
export default new TodoStore()