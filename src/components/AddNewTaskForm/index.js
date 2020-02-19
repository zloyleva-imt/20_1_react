import React from 'react';

import { Col } from 'react-bootstrap';

const AddNewTaskForm = ({addNewTaskHandler}) => (
    <Col xs={12} className="my-4">
        <form
            className="form-inline justify-content-center"
            onSubmit={addNewTaskHandler}
        >
            <div className="form-group mb-2 flex-grow-1 mr-1">
                <input
                    className="form-control w-100"
                    type="text"
                    name="taskName"
                    placeholder="Enter new task"
                />
            </div>
            <button className="btn btn-primary mb-2">Add task</button>
        </form>
    </Col>
);

export default AddNewTaskForm;