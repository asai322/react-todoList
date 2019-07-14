import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, EDIT_TASK } from '../../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [],
  }
}

const tasks = (state = TASKS.tasks, { id, taskName, taskText, isCompleted, currentTypeFilter, type }) => {
  switch (type) {
    case ADD_TASK :
      return [
        ...state, {
          id,
          taskName,
          taskText,
          currentTypeFilter,
          isCompleted,
        }
      ];
    case EDIT_TASK :
      return [...state].map(task => {
        if(task.id === id) {
          task.taskName = taskName;
          task.taskText = taskText;
        }
        return task;
      });
    case REMOVE_TASK:
        return [...state].filter(task => task.id !== id);
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

export default tasks;
