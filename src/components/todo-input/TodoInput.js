import React from 'react';
import PropTypes from 'prop-types';

import './TodoInput.css';

const ToDoInput = ({ title, text, onChangeTitle, onChangeText, onKeyPress }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input 
      className="input-title"
      placeholder="Click to add title"
      onChange={onChangeTitle}
      text={title}
    />
    <br/>
    <input 
      className="input-text"
      placeholder="Click to add text"
      onChange={onChangeText}
      text={text}
      onKeyPress={onKeyPress}
    />
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  text: PropTypes.string,
  title: PropTypes.string,
}

ToDoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  text: '',
  title: '',
}

export default ToDoInput;
