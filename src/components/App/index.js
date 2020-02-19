import React, {Component} from 'react';

import { Container, Row } from 'react-bootstrap';
import Header from '../../containers/Header';
import AddNewTaskForm from "../AddNewTaskForm";
import TasksList from "../TasksList";

import './style.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: [
                {id: Math.random(),title: 'Task #1', isDone: false},
                {id: Math.random(),title: 'Task #2', isDone: true},
                {id: Math.random(),title: 'Task #3', isDone: false},
                {id: Math.random(),title: 'Task #4', isDone: true},
                {id: Math.random(),title: 'Task #5', isDone: false},
            ],
            appHeader: 'Tasks List App',
        };

        this.addNewTaskHandler = (e) => {
            e.preventDefault();
            this.setState({
                tasks: [
                    ...this.state.tasks,
                    {id: Math.random(),title: e.target[0].value, isDone: false}
                ]
            });
            e.target[0].value = '';
        };

        this.setTaskToDoneHandler = task_id => this.setState({
            tasks: [
                ...this.state.tasks.map((el) => el.id===task_id?{...el, isDone:true}:el)
            ]
        });

        this.removeTaskHandler = task_id => this.setState({
            tasks: [
                ...this.state.tasks.filter(el => el.id!==task_id)
            ]
        })
    }



    render(){

        const {tasks, appHeader} = this.state;

        return (
            <Container>
                <Row>
                    <Header header={appHeader}/>
                    <AddNewTaskForm addNewTaskHandler={this.addNewTaskHandler}/>
                    <TasksList
                        tasks={tasks}
                        setTaskToDoneHandler={this.setTaskToDoneHandler}
                        removeTaskHandler={this.removeTaskHandler}
                    />
                </Row>
            </Container>
        );
    }
}

export default App;
