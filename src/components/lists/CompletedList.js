import { ReactComponent as DeleteBtn } from '../../icons/delete_outline_black_24dp.svg';
import { ReactComponent as DeleteAll } from '../../icons/delete_outline_white_24dp.svg';

import './CompletedList.css';

const CompletedList = ({ completedList, deleteTodo, deleteAll }) => {
  return (
    <ul className='completed-list'>
      {completedList.map((list) => {
        return (
          <li key={list.id}>
            <input type='checkbox' readOnly checked />
            <span className='complete-task'>{list.note}</span>
            <DeleteBtn
              className='delete-btn'
              onClick={() => deleteTodo(list)}
            />
          </li>
        );
      })}
      <button className='delete-all' onClick={deleteAll}>
        <DeleteAll />
        delete all
      </button>
    </ul>
  );
};

export default CompletedList;
