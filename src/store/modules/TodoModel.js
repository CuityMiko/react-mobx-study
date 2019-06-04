import {observable} from 'mobx'

export default class TodoModel {
    id = parseInt(Math.random() * 10000);
    created = new Date().getTime();
    @observable content;
    @observable isComplete = false;
    constructor(content) {
        this.content = content
    }
}