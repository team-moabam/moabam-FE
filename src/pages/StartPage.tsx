import { Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMoveRoute } from '@/core/hooks';
import RoutinesPage from './RoutinesPage';
import { useDayTypes } from '@/RoomSlide';
import {
  UserInfoFallback,
  SwipeArrow,
  UserInfo,
  Background
} from '@/StartSlide';

const StartPage = () => {
  const { dayType } = useDayTypes();
  const moveTo = useMoveRoute();

  return (
    <div className="h-full">
      <div className="absolute h-full w-full">
        <RoutinesPage />
      </div>
      <Swiper
        className="h-full"
        direction="vertical"
        allowSlidePrev={false}
        onReachEnd={() => moveTo('routines')}
      >
        <SwiperSlide className="shadow-lg">
          <Background type={dayType} />
          <Suspense fallback={<UserInfoFallback type={dayType} />}>
            <UserInfo type={dayType} />
          </Suspense>

          <div className="absolute inset-x-0 bottom-8 mx-auto w-fit">
            <SwipeArrow />
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StartPage;
