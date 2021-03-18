const CustomButton = ({
  children,
  isAll,
  isCompleted,
  isActive,
  style,
  ...otherProps
}) => {
  return (
    <button
      className={`${isAll ? 'all' : ''} : ${isActive ? 'active' : ''} : ${
        isCompleted ? 'completed' : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
