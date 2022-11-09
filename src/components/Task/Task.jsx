import React from "react";
import './Task.css';

function Task(props) {
    return (
        <div className="task">
            <div>
                <p className="task_text">{props.task}</p>
            </div>
            <div className="button_checkbox">
                <button className="button"  ><input type="checkbox" onChange={props.changeCheckbox}/></button>
                <button className="button deleteBtn" onClick={props.deleteTask} >x</button>
            </div>
        </div>
    );
};

export default Task;