import React from 'react';

interface IntroTextProps {
  children: React.ReactNode;
  className?: string;
}

const IntroText = ({ children, className }: IntroTextProps) => {
  return (
    <div className="flex items-center gap-6">
      <div className="h-5 w-5 rounded-full bg-light-point dark:bg-dark-point"></div>
      <div className={className}>
        {children}
        {/* <span className="bg-light-point bg-opacity-[0.2] dark:bg-dark-point dark:bg-opacity-[0.2]">
          같이 루틴을 하고 싶은 사람들
        </span>
        과 함께 */}
      </div>
    </div>
  );
};

export default IntroText;
