const ProgressBar = ({ progress = 0, ...props }) => {
  return (
    <div
      className="h-2.5 w-full overflow-hidden rounded-full bg-gray-300"
      {...props}
    >
      <div
        className="h-full bg-light-point dark:bg-dark-point "
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
