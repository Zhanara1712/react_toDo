import React, { useState } from 'react'
import './AddTaskForm.css';

function AddTaskForm({ currentTask }) {
    const [userInputState, setUserInputState] = useState('');
    const introduceСhanges = (e) => {
        setUserInputState(e.currentTarget.value);
    };

    const submitUserInput = (e) => {
        e.preventDefault();
        currentTask(userInputState);
        setUserInputState("");
    };

    return (
        <form onSubmit={submitUserInput}>
            <input value={userInputState} type="text" onChange={introduceСhanges} placeholder="Enter task..." />
            <button>Submit</button>
        </form>
    );
};

export default AddTaskForm;

