import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER, CHANGE_TASK } from '../../constants';

export const addTaskAction = (id, title, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  title,
  text,
  isCompleted
});

export const removeTaskAction = id => ({
  type: REMOVE_TASK,
  id
});

export const changeTaskAction = (id, title, text, isCompleted) => ({
  type: CHANGE_TASK,
  id,
  title,
  text,
  isCompleted
})

export const completeTaskAction = id => ({
  type: COMPLETE_TASK,
  id
});
