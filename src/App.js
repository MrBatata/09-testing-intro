import React from 'react';
import './App.css';
import Task from './testcomponents/Task';

function App() {

  const tasks = [
    { id: 1, description: 'Tarea 1', isCompleted: true },
    { id: 2, description: 'Tarea 2', isCompleted: true },
    { id: 3, description: 'Tarea 3', isCompleted: false }
  ]

  return (
    <div className="App">
      <h1>Introducción a testing</h1>
      {tasks.map((t, index) => <Task task={t} key={index}></Task>
      )}
    </div>
  );
};

export default App;
