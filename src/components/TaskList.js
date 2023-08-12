// src/components/TaskList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, toggleTask } from '../redux/actions';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (

    <div className="task-list">
      <div>
        <h1>Task List</h1>
        </div>
      <ul>

        <div>
        {tasks.map(task => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
            onClick={() => handleToggleTask(task.id)}
          >
            <input class="form-check form-check-input" value="" id="flexCheckChecked" type="checkbox"
              checked={task.completed}
              readOnly
            />
            {task.title}
            if({task.completed}=='true')||({task.completed}=='checked')
          </li>
        ))}
</div>
      </ul>
    </div>
  );
};

export default TaskList;
