import React from 'react';

const RoomDataFallback = () => {
  const skeletonStyles = {
    roomCard: 'w-full h-24 bg-light-gray dark:bg-dark-gray rounded-2xl',
    aboutBug: 'w-40 h-5 bg-light-gray rounded-2xl'
  };
  return (
    <div className="animate-pulse opacity-75">
      <div className="flex flex-col gap-2">
        <div className={skeletonStyles.roomCard}></div>
        <div className={skeletonStyles.roomCard}></div>
        <div className={skeletonStyles.roomCard}></div>
        <div className={skeletonStyles.roomCard}></div>
      </div>
      <div className="mr-1 mt-4 flex justify-end">
        <div className={skeletonStyles.aboutBug}></div>
      </div>
    </div>
  );
};

export default RoomDataFallback;
