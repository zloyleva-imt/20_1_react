import React from 'react';

import { Col } from 'react-bootstrap';

const TasksList = ({tasks,setTaskToDoneHandler,removeTaskHandler}) => (
    <Col xs={12} className="my-4">
        <ul>
            {
                tasks.map(el => (
                    <li key={el.id} className={el.isDone?'task_done':''}>
                        {el.title}
                        {
                            el.isDone?'':<button onClick={() => setTaskToDoneHandler(el.id)}>Make done</button>
                        }
                        <button onClick={() => removeTaskHandler(el.id)}>Remove task</button>
                    </li>
                ))
            }
        </ul>
    </Col>
);

export default TasksList;