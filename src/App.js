import { useState, useEffect } from 'react';

import './App.css';
import TodoList from './components/TodoList';
import AllTodos from './components/AllTodos';
import Form from './components/Form';
import DisplayButtons from './components/DisplayButtons';
import Completed from './components/completed/Completed';

function App() {
  const [allTodos, setAllTodos] = useState(
    JSON.parse(localStorage.getItem('allTodos')) || []
  );
  const [activeTodos, setActiveTodos] = useState(
    JSON.parse(localStorage.getItem('activeTodos')) || []
  );
  const [completedTodos, setCompletedTodos] = useState(
    JSON.parse(localStorage.getItem('completedTodos')) || []
  );

  useEffect(() => {
    localStorage.setItem('allTodos', JSON.stringify(allTodos));
  }, [allTodos]);
  useEffect(() => {
    localStorage.setItem('activeTodos', JSON.stringify(activeTodos));
  }, [activeTodos]);
  useEffect(() => {
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [completedTodos]);

  const [tasks, setTasks] = useState('');

  const [isAll, setIsAll] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  function toggleIsAll() {
    if (isActive) setIsActive(!isActive);
    if (isComplete) setIsComplete(!isComplete);
    setIsAll(!isAll);
  }
  function toggleIsComplete() {
    if (isActive) setIsActive(!isActive);
    if (isAll) setIsAll(!isAll);
    setIsComplete(!isComplete);
  }
  function toggleIsActive() {
    if (isComplete) setIsComplete(!isComplete);
    if (isAll) setIsAll(!isAll);
    setIsActive(!isActive);
  }

  function handleChange(event) {
    const { value } = event.target;
    setTasks(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setAllTodos((prevState) => {
      return [...prevState, tasks];
    });
    setActiveTodos((prevState) => {
      return [...prevState, tasks];
    });

    setTasks('');
  }

  function markComplete(todo) {
    setCompletedTodos((prevState) => {
      return [...prevState, todo];
    });
    setActiveTodos((prevState) => prevState.filter((task) => task !== todo));
  }

  function deleteAll() {
    setActiveTodos([]);
    setAllTodos([]);
    setCompletedTodos([]);
    localStorage.removeItem('allTodos');
    localStorage.removeItem('activeTodos');
    localStorage.removeItem('completedTodos');
  }

  function deleteOne(task) {
    setCompletedTodos((prevState) => {
      return prevState.filter((item) => item !== task);
    });
    setAllTodos((prevState) => {
      return prevState.filter((item) => item !== task);
    });
  }

  return (
    <div className='app'>
      <h1>#todo</h1>
      <DisplayButtons
        toggleIsActive={toggleIsActive}
        toggleIsAll={toggleIsAll}
        toggleIsComplete={toggleIsComplete}
      />
      <Form onSubmit={handleSubmit} onChange={handleChange} task={tasks} />
      {isAll ? (
        <AllTodos todos={allTodos} completedTodos={completedTodos} />
      ) : isActive ? (
        <TodoList todos={activeTodos} markComplete={markComplete} />
      ) : isComplete ? (
        <Completed
          todos={completedTodos}
          deleteAll={deleteAll}
          deleteOne={deleteOne}
        />
      ) : null}
    </div>
  );
}

export default App;
