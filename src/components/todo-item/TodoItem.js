import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

const TodoItem = ({ id, title, text, isCompleted, removeTask, completeTask, choiceToChange}) => (
  <li className="todo-item" onClick={() => choiceToChange(id)}>
    <div className="item-wrapper">
      {/* <i onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} /> */}
      {/* <span className={isCompleted ? 'completed text' : 'text'} >{title}</span> */}
      <div className={isCompleted ? 'completed text' : 'text'} ><b>{title}</b></div>
      <br/>
      <br/>
      <span className={isCompleted ? 'completed text' : 'text'} >{text}</span>
      <button className='delete-task-button' onClick={(e) => removeTask(e,id)}><i className="far fa-trash-alt" /></button>
    </div>
  </li>
)

TodoItem.propTypes = {
  title: PropTypes.string, 
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  choiceToChange: PropTypes.func,
  id: PropTypes.number,
}

TodoItem.defaultProps = {
  title: '',
  text: '',
  isCompleted: false,
  removeTask: () => {},
  completeTask: () => {},
  choiceToChange: () => {},
  id: 0,
}

export default TodoItem;