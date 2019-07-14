import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, EDIT_TASK } from '../../constants';

export const addTast = (id, taskName, taskText,currentTypeFilter, isCompleted) => ({
  type: ADD_TASK,
  id,
  taskName,
  taskText,
  currentTypeFilter,
  isCompleted
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});

export const editTask = (id, taskName, taskText, isCompleted) => ({
  type: EDIT_TASK,
  id,
  taskName,
  taskText,
  isCompleted
});
