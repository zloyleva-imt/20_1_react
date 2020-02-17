import React, {Component} from 'react';

import { Container, Row, Col } from 'react-bootstrap';

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
            ]
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

        const {tasks} = this.state;

        return (
            <Container>
                <Row>
                    <Col xs={12} className="my-4">
                        <h1 className="text-center">Tasks List App</h1>
                    </Col>
                    <Col xs={12} className="my-4">
                        <form
                            onSubmit={this.addNewTaskHandler}
                        >
                            <input type="text" name="taskName" placeholder="Enter new task" />
                            <button>Add task</button>
                        </form>
                    </Col>
                    <Col xs={12} className="my-4">
                        <ul>
                            {
                                tasks.map(el => (
                                    <li key={el.id} className={el.isDone?'task_done':''}>
                                        {el.title}
                                        {
                                            el.isDone?'':<button onClick={() => this.setTaskToDoneHandler(el.id)}>Make done</button>
                                        }
                                        <button onClick={() => this.removeTaskHandler(el.id)}>Remove task</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
