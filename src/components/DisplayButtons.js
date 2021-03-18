import CustomButton from './CustomButton';

const DisplayButtons = ({ toggleIsActive, toggleIsAll, toggleIsComplete }) => {
  return (
    <div className='buttons'>
      <CustomButton onClick={toggleIsAll} isAll>
        All
      </CustomButton>
      <CustomButton onClick={toggleIsActive} isActive>
        Active
      </CustomButton>
      <CustomButton onClick={toggleIsComplete} isCompleted>
        Completed
      </CustomButton>
    </div>
  );
};

export default DisplayButtons;
