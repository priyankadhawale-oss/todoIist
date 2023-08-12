// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskList from './components/TaskList';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
