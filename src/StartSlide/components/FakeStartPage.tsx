import React from 'react';
import { DayType } from '@/core/types';
import { Background, SwipeArrow, UserInfoFallback } from '..';

interface FakeStartPageProps {
  dayType: DayType;
}

const FakeStartPage = ({ dayType }: FakeStartPageProps) => {
  return (
    <div className="h-full">
      <Background type={dayType} />
      <UserInfoFallback type={dayType} />
      <div className="absolute inset-x-0 bottom-8 mx-auto w-fit">
        <SwipeArrow />
      </div>
    </div>
  );
};

export default FakeStartPage;
