import React, {Component} from 'react';
import {IndexWrapper} from './styles';

import Header from './Header';
import TodoList from './List';
import Footer from './Footer';

class TodoIndex extends Component {
    render() {
        return (
            <IndexWrapper>
                <Header />
                <TodoList />
                <Footer />
            </IndexWrapper>
        )
    }
}

export default TodoIndex