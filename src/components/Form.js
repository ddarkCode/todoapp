const Form = ({ onSubmit, onChange, task }) => {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={task} type='text' />
      <button className='add' type='submit'>
        Add
      </button>
    </form>
  );
};

export default Form;
