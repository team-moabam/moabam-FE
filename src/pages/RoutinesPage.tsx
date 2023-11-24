import { useState } from 'react';
import { Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import { SwiperClass } from 'swiper/react';
import { clsx } from 'clsx';
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

  return (
    <div className="flex h-full flex-col items-center overflow-auto">
      <Swiper
        className="h-full w-full"
        modules={[Controller]}
        controller={{ control: controllSwiper }}
        onSwiper={setRoutineSwiper}
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
      <div className="relative flex h-20 w-16 items-center overflow-hidden rounded-full">
        <div
          className={clsx(
            'absolute inset-y-0 my-auto h-[0.2rem] w-full rounded-full',
            'bg-light-point dark:bg-dark-point'
          )}
        ></div>
        <Swiper
          className="h-6 w-10 gap-0 overflow-visible"
          modules={[Controller]}
          controller={{ control: routineSwiper }}
          onSwiper={setControllSwiper}
          slidesPerView={1}
          dir="rtl"
        >
          <SwiperSlide className="flex justify-end">
            <div
              className={clsx(
                'relative right-[0.02rem] h-full w-3 rounded-s-full bg-white shadow-md'
              )}
            ></div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-start">
            <div
              className={clsx(
                'relative left-[0.02rem] h-full w-3 rounded-e-full bg-white shadow-md'
              )}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>

      <PWAInstallBanner />
      <Suspense>
        <EventBanner />
      </Suspense>
    </div>
  );
};

export default RoutinesPage;
