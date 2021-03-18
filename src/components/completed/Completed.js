import { ReactComponent as Delete } from '../../svgs/delete-24px.svg';
import './Completed.css';

const Completed = ({ todos, deleteAll, deleteOne }) => {
  return (
    <ul className='completed-ul'>
      {todos.map((todo) => {
        return (
          <li key={todo} className='completed-item'>
            <input type='checkbox' readOnly checked />
            <p className='completed-p'>{todo}</p>
            <span className='logo-span'>
              <Delete onClick={() => deleteOne(todo)} className='delete' />
            </span>{' '}
          </li>
        );
      })}
      <button className='delete-button' onClick={deleteAll}>
        <Delete /> delete all
      </button>
    </ul>
  );
};

export default Completed;
