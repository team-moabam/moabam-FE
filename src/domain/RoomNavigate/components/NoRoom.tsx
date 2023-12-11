import React from 'react';
import { Link } from 'react-router-dom';

const NoRoom = () => {
  const buttonStyle =
    'btn btn-light-point dark:btn-dark-point w-36 text-center font-IMHyemin-bold';
  return (
    <div className="flex h-full flex-col items-center justify-center p-6">
      <div className="mb-2 break-keep text-center font-IMHyemin-bold text-2xl">
        참여 중인 루틴이 없네요!
      </div>
      <div className="text-dark-gray">사람들과 함께 루틴을 지켜보세요</div>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          className={buttonStyle}
          to="/search"
        >
          루틴방 찾아보기
        </Link>
        <Link
          className={buttonStyle}
          state={{ from: 'room' }}
          to="new"
        >
          루틴방 만들기
        </Link>
      </div>
    </div>
  );
};

export default NoRoom;
