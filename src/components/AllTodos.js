import './TodoList.css';

const AllTodos = ({ todos, completedTodos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo} className='item'>
            {completedTodos.includes(todo) ? (
              <input type='checkbox' checked />
            ) : (
              <input type='checkbox' />
            )}

            <p> {todo} </p>
          </li>
        );
      })}
    </ul>
  );
};

export default AllTodos;
