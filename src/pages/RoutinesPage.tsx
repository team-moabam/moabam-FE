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
import { SlideController } from '@/RoomSlide';

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

      <SlideController
        control={routineSwiper}
        onSwiper={setControllSwiper}
      />

      <PWAInstallBanner />
      <Suspense>
        <EventBanner />
      </Suspense>
    </div>
  );
};

export default RoutinesPage;
