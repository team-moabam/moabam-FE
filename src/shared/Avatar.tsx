import React from 'react';

interface AvatarProps {
  imgUrl: string;
  contribution: number;
  nickname: string;
}

const Avatar = ({ imgUrl, contribution, nickname }: AvatarProps) => {
  return (
    <div className="flex items-center">
      <div className="pr-[16px]">
        <img
          src={imgUrl}
          className="h-[50px] w-[50px] rounded-full"
        />
      </div>
      <div className="flex flex-col text-[14px] font-bold">
        <span className="text-black">{nickname}</span>
        <span className="text-light-gray">기여도 : {contribution}점</span>
      </div>
    </div>
  );
};

export default Avatar;
