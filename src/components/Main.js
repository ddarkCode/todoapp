import { useEffect, useState } from 'react';
import Button from './buttons/Button';
import Input from './Input';
import ActiveList from './lists/ActiveList';
import AllList from './lists/AllList';
import CompletedList from './lists/CompletedList';
import './Main.css';

const Main = () => {
  const [activeList, setActiveList] = useState(
    JSON.parse(localStorage.getItem('activeList')) || []
  );
  const [allList, setAllList] = useState(
    JSON.parse(localStorage.getItem('allList')) || []
  );
  const [completedList, setCompletedList] = useState(
    JSON.parse(localStorage.getItem('completedList')) || []
  );

  const [chore, setChore] = useState('');

  const [all, setAll] = useState(false);
  const [complete, setComplete] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setAllList([...activeList, ...completedList]);
  }, [activeList, completedList]);

  useEffect(() => {
    localStorage.setItem('allList', JSON.stringify(allList));
  }, [allList]);
  useEffect(() => {
    localStorage.setItem('activeList', JSON.stringify(activeList));
  }, [activeList]);
  useEffect(() => {
    localStorage.setItem('completedList', JSON.stringify(completedList));
  }, [completedList]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setChore(value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: allList.length + 1,
      note: chore,
      isComplete: false,
    };
    setActiveList((prevList) => {
      return [...prevList, newTodo];
    });
    setChore('');
  };

  const deleteTodo = (todo) => {
    setCompletedList((prevList) => {
      return prevList.filter((list) => list.id !== todo.id);
    });
  };

  const deleteAll = () => {
    setActiveList([]);
    setAllList([]);
    setCompletedList([]);
  };

  const markComplete = (todo) => {
    todo.isComplete = true;
    setCompletedList((prevList) => {
      return [...prevList, todo];
    });
    setActiveList((prevList) => {
      return prevList.filter((list) => list.id !== todo.id);
    });
  };

  const toggleAll = () => {
    complete && setComplete(!complete);
    active && setActive(!active);
    setAll(!all);
  };

  const toggleComplete = () => {
    all && setAll(!all);
    active && setActive(!active);
    setComplete(!complete);
  };

  const toggleActive = () => {
    all && setAll(!all);
    complete && setComplete(!complete);
    setActive(!active);
  };

  return (
    <div>
      <div className='main-buttons'>
        <Button toggle={toggleAll} isClicked={all}>
          All
        </Button>
        <Button toggle={toggleActive} isClicked={active}>
          Active
        </Button>
        <Button toggle={toggleComplete} isClicked={complete}>
          Completed
        </Button>
      </div>
      <Input addTodo={addTodo} handleChange={handleChange} chore={chore} />

      {all ? (
        allList.map((list) => <AllList key={list.id} list={list} />)
      ) : active ? (
        activeList.map((list) => (
          <ActiveList key={list.id} list={list} markComplete={markComplete} />
        ))
      ) : complete ? (
        <CompletedList
          completedList={completedList}
          deleteTodo={deleteTodo}
          deleteAll={deleteAll}
        />
      ) : null}
    </div>
  );
};

export default Main;
