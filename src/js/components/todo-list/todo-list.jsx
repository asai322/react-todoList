import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../../containers/todo-item/todo-item';

import styled from "styled-components";

const TodoList = styled.ul`
  margin: 0;
  padding: 0;
`

const ToDoList = ({ tasksList, removeTask, completeTask }) => (
  <TodoList>
    {tasksList.map(({ id, taskName, taskText, isCompleted }) => (
      <ToDoItem completeTask={completeTask}
                removeTask={removeTask}
                id={id}
                key={id+taskText}
                name={taskName}
                text={taskText}
                isCompleted={isCompleted} />
    ))}
  </TodoList>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
}

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {},
}

export default ToDoList;
