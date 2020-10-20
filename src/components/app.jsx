import React, { Component } from 'react';
import Header from './header';
import ToDoList from './toDoList';

class App extends Component { 

    render() { 
        return (
            <React.Fragment>
                <Header />
                <ToDoList />
            </React.Fragment>
        );
    }
}
 
export default App;