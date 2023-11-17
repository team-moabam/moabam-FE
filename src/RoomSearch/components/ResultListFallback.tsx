import React from 'react';

interface ResultListFallbackProps {
  size?: number;
}

const ResultListFallback = ({ size = 10 }: ResultListFallbackProps) => {
  return (
    <div className="flex flex-col gap-2 opacity-60">
      {Array.from({ length: size }, (_, index) => (
        <div
          key={index}
          className="my-1 h-24 w-full animate-pulse rounded-2xl bg-dark-gray"
        ></div>
      ))}
    </div>
  );
};

export default ResultListFallback;
