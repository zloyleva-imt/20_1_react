import React from 'react';

const TaskItem = ({data,setTaskToDoneHandler,removeTaskHandler}) => (
    <li className={data.isDone?'task_done':''}>
        {data.title}
        {
            data.isDone?'':<button onClick={() => setTaskToDoneHandler(data.id)}>Make done</button>
        }
        <button onClick={() => removeTaskHandler(data.id)}>Remove task</button>
    </li>
);

export default TaskItem;