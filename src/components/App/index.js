import React, {Component} from 'react';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: [
                {id: Math.random(),title: 'Task #1'},
                {id: Math.random(),title: 'Task #2'},
                {id: Math.random(),title: 'Task #3'},
                {id: Math.random(),title: 'Task #4'},
                {id: Math.random(),title: 'Task #5'},
            ]
        };

        this.addNewTaskHandler = (e) => {
            e.preventDefault();
            this.setState({
                tasks: [
                    ...this.state.tasks,
                    {id: Math.random(),title: e.target[0].value}
                ]
            });
            e.target[0].value = '';
        };
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
                            tasks.map(el => <li key={el.id}>{el.title}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
