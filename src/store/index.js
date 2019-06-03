import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers';

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)) // composeWithDevTools redux检测工具 applyMiddleware(thunk) 异步调用中间件
)

