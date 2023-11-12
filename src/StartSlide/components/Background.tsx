import React from 'react';
import { clsx } from 'clsx';

interface BackgroundProps {
  type: 'morning' | 'night';
}

const bgStyle = {
  morning: {
    skyObject: '/assets/Sun.png',
    skyObjectStyle: 'absolute bottom-16 right-12 w-3/5',
    skyColor: 'bg-gradient-to-b from-[#0084c6] to-[#fea4af]',
    mountain: '/assets/MorningMountain.png'
  },
  night: {
    skyObject: '/assets/Moon.png',
    skyObjectStyle: 'absolute top-24 left-2 w-1/2',
    skyColor: 'bg-gradient-to-b from-[#662d91] to-[#000f2a]',
    mountain: '/assets/NightMountain.png'
  }
};

const Background = ({ type }: BackgroundProps) => {
  return (
    <div
      className={clsx(
        'absolute top-0 h-full w-full overflow-hidden',
        bgStyle[type].skyColor
      )}
    >
      <img
        className={bgStyle[type].skyObjectStyle}
        src={bgStyle[type].skyObject}
      />
      <div className="absolute -bottom-1">
        <img
          className="relative top-40 scale-x-150 scale-y-110 opacity-50"
          src={bgStyle[type].mountain}
        />
        <img
          className="scale-105"
          src={bgStyle[type].mountain}
        />
      </div>
    </div>
  );
};

export default Background;
