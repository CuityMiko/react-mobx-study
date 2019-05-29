import React from 'react';
import {IndexWrapper} from './styles';

import Header from './Header';
import TodoList from './List';
import Footer from './Footer';


export default (props) => {
    return (
        <IndexWrapper>
            <Header />
            <TodoList />
            <Footer />
        </IndexWrapper>
    )
}