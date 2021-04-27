import './Input.css';

const Input = ({ addTodo, handleChange, chore }) => {
  return (
    <div className='input-section'>
      <input type='text' value={chore} onChange={handleChange} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
