import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers';
import sagas from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware)) // composeWithDevTools redux检测工具 applyMiddleware(thunk) 异步调用中间件
)

// then run the saga
sagaMiddleware.run(sagas)

export default store;

