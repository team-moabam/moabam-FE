const EditInput = ({ ...props }) => {
  return (
    <input
      className="w-full border-b border-light-gray bg-transparent p-1 focus:border-b-2
          focus:border-light-point focus:outline-none focus:ring-light-point
          dark:focus:border-dark-point dark:focus:ring-dark-point"
      {...props}
    />
  );
};

export default EditInput;
