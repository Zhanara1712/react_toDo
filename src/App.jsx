import React, { useState } from 'react'
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import Task from './components/Task/Task'

function App() {
  const [tasksState, setTasksState] = useState([
    {task: 'Buy milk'},
    {task: 'Buy ice-cream'},
    {task: 'Buy pepsi'}
  ]);

  function currentTask (task) {
    const stateCopy = [...tasksState, { task }];
    setTasksState(stateCopy);
  };

  function deleteTask(i) {
    const stateCopy = [...tasksState];
    stateCopy.splice(i, 1);
    setTasksState(stateCopy);
  };

  const [checked, setChecked] = useState(true);

  function changeCheckbox() {
    setChecked(!checked);
  };

  let tasks = [];
  if (tasksState.length) {
    tasks = tasksState.map((a, i) => {
      return <Task
        key={i}
        task={a.task}
        changeCheckbox={() => changeCheckbox()}
        deleteTask={() => deleteTask(i)}
      />
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className='header_text'>My Todo List</h1>
        <AddTaskForm currentTask={currentTask} />
        {tasks}
      </div>
    </div>
  );
};

export default App;
