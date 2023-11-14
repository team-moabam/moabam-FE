import React from 'react';

const LoadingFallback = () => {
  const skeletonStyles = {
    roomCard: 'w-full h-24 bg-light-gray rounded-2xl animate-pulse',
    aboutBug: 'w-40 h-5 bg-light-gray rounded-2xl animate-pulse'
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className={skeletonStyles.roomCard}></div>
        <div className={skeletonStyles.roomCard}></div>
        <div className={skeletonStyles.roomCard}></div>
        <div className={skeletonStyles.roomCard}></div>
      </div>
      <div className="mr-1 mt-4 flex justify-end">
        <div className={skeletonStyles.aboutBug}></div>
      </div>
    </>
  );
};

export default LoadingFallback;
