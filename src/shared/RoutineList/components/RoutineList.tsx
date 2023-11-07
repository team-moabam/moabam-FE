import { twMerge } from 'tailwind-merge';

interface RoutineListProps {
  children: React.ReactNode;
  className?: string;
}

const RoutineList = ({ children, className = '' }: RoutineListProps) => {
  return (
    <div className={twMerge('flex flex-col gap-4', className)}>{children}</div>
  );
};

export default RoutineList;
