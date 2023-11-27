import React from 'react';

interface MarkProps {
  children: React.ReactNode;
}

const Mark = ({ children }: MarkProps) => {
  return (
    <span className="bg-light-point bg-opacity-[0.2] dark:bg-dark-point dark:bg-opacity-[0.2]">
      {children}
    </span>
  );
};

export default Mark;
