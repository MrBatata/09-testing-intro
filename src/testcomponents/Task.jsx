import React, { useState } from 'react';

const Task = (props) => {

  const [checked, setchecked] = useState(props.task.isCompleted)

  const handleOnChange = () => {
    setchecked(!checked)
  }

  return (
    <div data-testid={`task-test-${props.task.id}`}>
      <h3>Hola</h3>
      <div>
        <span>ID: {props.task.id}</span>
        <span>Descripción: {props.task.description}</span>
      </div>
      <div>
        <label name="completed">Completado</label>
        <input name="completed" id="checkbox"
          type='checkbox'
          onChange={handleOnChange}
          checked={checked}
        />
      </div>
    </div>
  );
}

export default Task;
