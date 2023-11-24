import { clsx } from 'clsx';
import Star from './Star';

interface BackgroundProps {
  type: 'MORNING' | 'NIGHT';
}

const bgStyle = {
  MORNING: {
    skyObject: '/assets/Sun.png',
    skyObjectStyle: 'absolute bottom-16 right-8 w-3/5',
    skyColor: 'bg-gradient-to-b from-[#0084c6] to-[#fea4af]',
    mountain: '/assets/MorningMountain.png'
  },
  NIGHT: {
    skyObject: '/assets/Moon.png',
    skyObjectStyle: 'absolute top-24 left-2 w-1/2',
    skyColor: 'bg-gradient-to-b from-[#61298c] to-[#000f2a]',
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
      <div className="absolute top-0 h-1/2 w-full">
        {Array.from({ length: 24 }, (_, index) => (
          <Star key={index} />
        ))}
      </div>
      <img
        className={bgStyle[type].skyObjectStyle}
        src={bgStyle[type].skyObject}
      />
      <div className="absolute bottom-5">
        <img
          className="relative top-40 scale-x-150 scale-y-110 opacity-50"
          src={bgStyle[type].mountain}
        />
        <img
          className="scale-105"
          src={bgStyle[type].mountain}
        />
      </div>
      <div className="absolute bottom-0 h-5 w-full bg-[#522762] dark:bg-[#031430]"></div>
      <img
        className="absolute bottom-0 right-0 top-36 z-10 my-auto w-3/4 dark:left-0 dark:-scale-x-100"
        src="/assets/branch.png"
      />
    </div>
  );
};

export default Background;
