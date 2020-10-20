import React, { Component } from 'react';
import Modal from './modal';
import Task from './task';

class ToDoList extends Component { 

    state = {
        tasks: [
            {taskId: 0, taskDesc: "Project Task 1", checked: false},
            {taskId: 1, taskDesc: "Project Task 2", checked: false}
        ],
        open: false
    }

    showModal = () => {
        console.log('working');
        this.setState({open: true});
    }

    hideModal = () => {
        this.setState({open: false});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const data = event.target.taskDesc.value;
        this.state.tasks.push({taskId: this.state.tasks.length, taskDesc: data, 
                               checked: false});
        this.setState({tasks: this.state.tasks, open: false});
    };

    handleCheckBox = (event) => {
        const tasks = this.state.tasks.slice();
        let task = tasks[event.target.id];
        task.checked = !task.checked;
        this.setState({ tasks: tasks } );
    }

    render() { 
        return (
            <React.Fragment>
                <section id="to-do-list" className="fl-r">
                    <div className="to-do-ctn">
                        <div>
                            <h1>My To-Do List</h1>
                            <ul>
                                {this.state.tasks.map(task => <Task id={task.taskId}
                                                            check={task.checked}
                                                            handleCheckBox={this.handleCheckBox}
                                                            taskDesc={task.taskDesc}/>)}
                            </ul>
                        </div>
                        <div>
                            <button type="button" onClick={this.showModal} className="icon-plus"></button>
                            <Modal open={this.state.open} handleClose={this.hideModal} handleFormSubmit={this.handleFormSubmit} />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
 
export default ToDoList;