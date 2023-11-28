import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMoveRoute } from '@/core/hooks';
import { NetworkFallback } from '@/shared/ErrorBoundary';
import { useDayTypes } from '@/RoomSlide';
import {
  UserInfoFallback,
  SwipeArrow,
  UserInfo,
  Background
} from '@/StartSlide';
import { PWAInstallBanner } from '@/PWAInstallBanner';
import RoutinesPage from './RoutinesPage';

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

          <ErrorBoundary fallback={<NetworkFallback />}>
            <Suspense fallback={<UserInfoFallback type={dayType} />}>
              <UserInfo type={dayType} />
            </Suspense>
          </ErrorBoundary>

          <div className="absolute bottom-8 w-full">
            <PWAInstallBanner />
            <div className="inset-x-0 mx-auto w-fit">
              <SwipeArrow />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StartPage;
