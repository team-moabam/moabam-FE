import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useMoveRoute } from '@/core/hooks';
import { NetworkFallback } from '@/shared/ErrorBoundary';
import { Deffered } from '@/shared/Deffered';
import { useDayTypes } from '@/RoomSlide';
import {
  UserInfoFallback,
  SwipeArrow,
  UserInfo,
  Background,
  FakeRoutinesPage
} from '@/StartSlide';

const StartPage = () => {
  const { dayType } = useDayTypes();
  const moveTo = useMoveRoute();

  return (
    <Deffered>
      <motion.div
        className="h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute h-full w-full">
          <FakeRoutinesPage dayType={dayType} />
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

            <div className="absolute inset-x-0 bottom-8 mx-auto w-fit">
              <SwipeArrow />
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </motion.div>
    </Deffered>
  );
};

export default StartPage;
