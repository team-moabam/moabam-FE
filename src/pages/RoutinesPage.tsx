import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import { SwiperClass } from 'swiper/react';
import { useTheme } from '@/core/hooks';
import RoomSlide from '@/RoomSlide/components/RoomSlide';
import { EventBanner } from '@/Promotion';
import { PWAInstallBanner } from '@/PWAInstallBanner';

const RoutinesPage = () => {
  const { theme } = useTheme();
  const DAY_TYPES =
    theme === 'dark'
      ? (['NIGHT', 'MORNING'] as const)
      : (['MORNING', 'NIGHT'] as const);

  const [routineSwiper, setRoutineSwiper] = useState<SwiperClass | null>(null);
  const [controllSwiper, setControllSwiper] = useState<SwiperClass | null>(
    null
  );
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  return (
    <div className="flex h-full flex-col overflow-auto">
      <Swiper
        className="h-full w-full"
        modules={[Controller]}
        controller={{ control: controllSwiper }}
        onSwiper={setRoutineSwiper}
        allowSlidePrev={!isFirstSlide}
        allowSlideNext={isFirstSlide}
        onReachEnd={() => setIsFirstSlide(false)}
        onReachBeginning={() => setIsFirstSlide(true)}
      >
        {DAY_TYPES.map((roomType) => (
          <SwiperSlide
            className="h-full"
            key={roomType}
          >
            <RoomSlide roomType={roomType} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="h-20 w-40 gap-0 rounded-full bg-white"
        modules={[Controller]}
        controller={{ control: routineSwiper }}
        onSwiper={setControllSwiper}
        slidesPerView={1}
        allowSlidePrev={!isFirstSlide}
        allowSlideNext={isFirstSlide}
      >
        <SwiperSlide className="flex items-start">
          <div className="h-full w-full  bg-light-point"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full bg-dark-point"></div>
        </SwiperSlide>
      </Swiper>

      <PWAInstallBanner />
      <Suspense>
        <EventBanner />
      </Suspense>
    </div>
  );
};

export default RoutinesPage;
