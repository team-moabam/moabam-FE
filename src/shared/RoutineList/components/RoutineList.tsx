import React from 'react';

interface RoutineListProps {
  children: React.ReactNode;
  className?: string;
}

const RoutineList = ({ children, className }: RoutineListProps) => {
  return (
    <div className={'flex flex-col gap-4 ' + `${className ? className : ''}`}>
      {children}
    </div>
  );
};

export default RoutineList;
