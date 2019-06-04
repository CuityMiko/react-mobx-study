import {observable, computed, action} from 'mobx';

class TodoStore {
    @observable todoList = [
        {id: 1, content: '写代码', isComplete: false, created: new Date().getTime()}
    ];

    @computed
    get unDoCount() {
        return this.todoList.filter(t => !t.isComplete).length;
    }

    @action 
    addTodo = (content) => {
        this.todoList.push({
            id: parseInt(Math.random() * 10000),
            created: new Date().getTime(),
            content,
            isComplete: false
        })
    }
}
export default new TodoStore()