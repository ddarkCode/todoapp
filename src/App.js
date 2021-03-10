import { useState } from 'react';

import './App.css';

function App() {
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
  return (
    <div className='app'>
      <h1>#todo</h1>
      <div className='buttons'>
        <button className='all' onClick={toggleIsAll}>
          All
        </button>
        <button className='active' onClick={toggleIsActive}>
          Active
        </button>
        <button className='completed' onClick={toggleIsComplete}>
          Completed
        </button>
      </div>
      <form>
        <input type='text' />
        <button className='add' type='submit'>
          Add
        </button>
      </form>
      {isAll ? (
        <ul>
          <li class='item'>
            <input type='checkbox' />
            <p> element </p>
          </li>
        </ul>
      ) : isActive ? (
        <ul>
          <li>Task1</li>
          <li>Task1</li>
          <li>Task1</li>
        </ul>
      ) : isComplete ? (
        <ul>
          <li>Task2</li>
          <li>Task2</li>
          <li>Task2</li>
        </ul>
      ) : null}
    </div>
  );
}

export default App;
