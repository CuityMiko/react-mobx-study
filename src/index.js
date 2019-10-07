import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TODOS from './todos/index';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';

import 'antd/dist/antd.css';

import {AppContainer} from 'react-hot-loader';

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <TODOS />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

render();

if (module.hot) {
    module.hot.accept('./todos/index', () => {
        render();
    })
}

// ReactDOM.render(
//     <Provider store={store}>
//         <TODOS />
//     </Provider>, 
// document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
