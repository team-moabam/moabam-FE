interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: number;
}

const ProgressBar = ({
  progress = 0,
  className = '',
  ...props
}: ProgressBarProps) => (
  <div
    className={`h-2.5 w-full overflow-hidden bg-lightGray ${className}`}
    {...props}
  >
    <div
      className="h-full bg-light-point dark:bg-dark-point"
      style={{ width: `${progress}%` }}
    />
  </div>
);

export default ProgressBar;
