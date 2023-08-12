// src/redux/actions.js
import axios from 'axios';

export const fetchTasks = () => async (dispatch) => {
  try{
    const response = (await axios.get('https://jsonplaceholder.typicode.com/todos')).data;
    const tasks = response.sort(function(a, b) { return a.Variable1 < b.Variable1 ? 1 : -1; })
                .slice(0, 12);
  
    dispatch({ type: 'FETCH_TASKS', payload: tasks });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

export const toggleTask = (taskId) => {
  return { type: 'TOGGLE_TASK', payload: taskId };
};
