const AllList = ({ list }) => {
  return (
    <ul className='all-list'>
      <li>
        {list.isComplete ? (
          <>
            <input type='checkbox' checked readOnly />
            <span className='complete-task'>{list.note}</span>
          </>
        ) : (
          <>
            <input type='checkbox' />
            <span>{list.note}</span>
          </>
        )}
      </li>
    </ul>
  );
};

export default AllList;
