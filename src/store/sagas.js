// saga 模块化引入
import { fork, all } from 'redux-saga/effects';
import todoSaga from './modules/todos/todoSaga';

// 单一进入点，一次启动所有 Saga
export default function* rootSaga() {
    // yield all([fork(signin), fork(signout), fork(fetchData)]);
    yield all([
        fork(todoSaga),
    ]);
}