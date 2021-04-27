const ActiveList = ({ list, markComplete }) => {
  return (
    <ul className='active-list'>
      <li>
        <input type='checkbox' onClick={() => markComplete(list)} />
        <span>{list.note}</span>
      </li>
    </ul>
  );
};

export default ActiveList;
