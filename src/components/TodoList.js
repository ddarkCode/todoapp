import './TodoList.css';

const TodoList = ({ todos, markComplete }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo} className='item'>
            <input onClick={() => markComplete(todo)} type='checkbox' />
            <p> {todo} </p>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
