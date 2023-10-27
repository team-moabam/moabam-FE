const Input = ({ ...props }) => {
  return (
    <input
      type="text"
      className="
        w-full 
        rounded-lg
        border 
        border-gray-300 
        p-3 
        shadow-sm 
        placeholder:text-gray-400 
        focus:border-light-point
        focus:outline-none
        focus:ring-1
        focus:ring-light-point 
        dark:focus:border-dark-point
        dark:focus:ring-dark-point
        sm:text-sm
        "
      {...props}
    />
  );
};

export default Input;
