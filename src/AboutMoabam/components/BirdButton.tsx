import React from 'react';

interface BirdButtonProps {
  text: string;
  birdImage: string;
}

const BirdButton = ({ text, birdImage }: BirdButtonProps) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="btn btn-light-point dark:btn-dark-point cursor-pointer text-lg dark:text-dark-main max-xl:text-base">
        {text}
      </div>
      <div>
        <img
          src={birdImage}
          className="w-full max-w-[8rem]"
        />
      </div>
    </div>
  );
};

export default BirdButton;
