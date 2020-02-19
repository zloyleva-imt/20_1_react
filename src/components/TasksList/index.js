import React from 'react';

import { Col } from 'react-bootstrap';
import TaskItem from "../TaskItem";

const TasksList = ({tasks,setTaskToDoneHandler,removeTaskHandler}) => (
    <Col xs={12} className="my-4">
        <ul>
            {
                tasks.map(el => (
                    <TaskItem
                        key={el.id}
                        data={el}
                        setTaskToDoneHandler={setTaskToDoneHandler}
                        removeTaskHandler={removeTaskHandler}
                    />
                ))
            }
        </ul>
    </Col>
);

export default TasksList;