import React, {Component} from 'react';

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
    }



    render(){

        const {tasks} = this.state;

        return (
            <div className="App">
                <h1>Tasks List App</h1>
                <form
                    onSubmit={this.addNewTaskHandler}
                >
                    <input type="text" name="taskName" placeholder="Enter new task" />
                    <button>Add task</button>
                </form>
                <div>
                    <ul>
                        {
                            tasks.map(el => (
                                <li key={el.id} className={el.isDone?'task_done':''}>
                                    {el.title}
                                    {
                                        el.isDone?'':<button onClick={() => this.setTaskToDoneHandler(el.id)}>Make done</button>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
