import { ADD_TASK, REMOVE_TASK, CHANGE_TASK, COMPLETE_TASK } from '../../constants.js';
import { TASKS } from '../initialState.js';

// это своего рода initial state
// возможно следует перенести в файл initialState.js

// создадим редьюсер
const tasksReducer = (state = TASKS, { id, title, text, isCompleted, type }) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state, {
          id,
          title,
          text,
          isCompleted,
        }
      ];
    case REMOVE_TASK:
      return [...state].filter(elem => {
        return elem.id != id;
      });
    case CHANGE_TASK:
      let localState1 = [...state].filter(elem => {
        return elem.id != id;
      });
      let localState2 = [{
        id,
        title,
        text,
        isCompleted,
      }, ...localState1];
      return localState2;
    case COMPLETE_TASK:
      return [...state].map(task => {
        if(task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    default:
      return state;
  }
}

export default tasksReducer;