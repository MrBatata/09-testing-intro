import React from "react";
import { render, screen, cleanup } from "@testing-library/react"
import Task from "./Task";
import renderer from "react-test-renderer";


afterEach(() => cleanup());

describe('Task component is working correctly', () => {
  const task1 = { id: 1, description: 'Tarea 1', isCompleted: true }
  render(<Task task={task1}></Task>);
  const TaskElement1 = screen.getByTestId(`task-test-${task1.id}`);
  const checkbox1 = TaskElement1.querySelector('#checkbox')

  it('should render Task component', () => {
    expect(TaskElement1).toBeInTheDocument();

  });

  it('should have right texts', () => {
    expect(TaskElement1).toHaveTextContent(task1.id);
    expect(TaskElement1).toHaveTextContent(task1.description);
  });

  it('should be checked', () => {
    expect(checkbox1).toBeChecked();
  });

  const task2 = { id: 42, description: 'Tarea 42', isCompleted: false }
  render(<Task task={task2}></Task>);
  const TaskElement2 = screen.getByTestId(`task-test-${task2.id}`);
  const checkbox2 = TaskElement2.querySelector('#checkbox');

  it('should be checked', () => {
    expect(checkbox2).not.toBeChecked();
  });

  it('matches snapshot ', () => {
    const snapTask = { id: 15, description: 'Snapshot 2', isCompleted: false }
    const tree = renderer.create(<Task task={snapTask}></Task>)
    expect(tree).toMatchSnapshot();
  });

})

