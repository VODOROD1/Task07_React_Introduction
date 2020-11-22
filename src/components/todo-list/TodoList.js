import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item/TodoItem.js';

import './TodoList.css';

const TodoList = ({ tasksList, removeTask, completeTask, choiceToChange }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, title, text, isCompleted }) => (
      <TodoItem key={id} id={id} title={title} text={text} isCompleted={isCompleted} removeTask={removeTask} completeTask={completeTask} choiceToChange={choiceToChange} />
    ))}
  </ul>
);

TodoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  choiceToChange: PropTypes.func,
}

TodoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {},
  choiceToChange: () => {},
}

export default TodoList;