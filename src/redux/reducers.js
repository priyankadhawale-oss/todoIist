// src/redux/reducers.js
const initialState = {
    tasks: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TASKS':
        return { ...state, tasks: action.payload };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  