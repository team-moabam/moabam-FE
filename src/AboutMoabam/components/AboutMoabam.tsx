import React from 'react';

interface AboutMoabamProps {
  theme: string;
}

const AboutMoabam = ({ theme }: AboutMoabamProps) => {
  return (
    <div className="flex h-full flex-col items-start justify-center">
      <div className="flex flex-wrap items-end gap-4">
        <div className="text-3xl text-dark-gray dark:text-light-gray">
          <div className="mb-1 font-IMHyemin-bold">
            <span className="font-IMHyemin-bold text-confirm">모</span>두의{' '}
            <span className="font-IMHyemin-bold text-light-point-hover">
              아
            </span>
            침과{' '}
            <span className="font-IMHyemin-bold text-dark-point-hover">밤</span>
          </div>

          <div className="font-IMHyemin-bold">
            사람들을{' '}
            <span className="font-IMHyemin-bold text-black dark:text-white">
              모아밤!
            </span>
          </div>
        </div>
        <img
          className="mb-1 ml-1 w-48"
          src={`/assets/typologo/typologo-${theme}.svg`}
        />
      </div>
    </div>
  );
};

export default AboutMoabam;
