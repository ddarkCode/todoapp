import './Button.css';

const Button = ({ children, isClicked, toggle }) => {
  return (
    <div className='toggle-button-container'>
      <button
        onClick={toggle}
        style={{ borderBottom: isClicked ? '3px solid #2f80ed' : '' }}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
