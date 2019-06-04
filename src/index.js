import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TODOS from './todos/index';
import {Provider} from 'mobx-react';
import rootStore from './store/'

import 'antd/dist/antd.css';

ReactDOM.render(
    <Provider {...rootStore}>
        <TODOS />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
