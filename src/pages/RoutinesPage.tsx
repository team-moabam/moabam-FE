import { useState } from 'react';
import { Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import { SwiperClass } from 'swiper/react';
import { EventBanner } from '@/Promotion';
import { PWAInstallBanner } from '@/PWAInstallBanner';
import { SlideController, useDayTypes, RoomSlide, DayInfo } from '@/RoomSlide';

const RoutinesPage = () => {
  const { DAY_TYPES, toggleDayType, dayType } = useDayTypes();
  const [routineSwiper, setRoutineSwiper] = useState<SwiperClass | null>(null);
  const [controllSwiper, setControllSwiper] = useState<SwiperClass | null>(
    null
  );

  return (
    <div className="flex h-full flex-col items-center overflow-auto">
      <div className="mb-4 mt-8 flex w-full items-center justify-between px-10 pr-8">
        <DayInfo dayType={dayType} />
        <SlideController
          control={routineSwiper}
          onSwiper={setControllSwiper}
        />
      </div>

      <Swiper
        className="h-full w-full"
        modules={[Controller]}
        controller={{ control: controllSwiper }}
        onSwiper={setRoutineSwiper}
        onSlideChange={toggleDayType}
      >
        {DAY_TYPES.map((dayType) => (
          <SwiperSlide
            className="h-full"
            key={dayType}
          >
            <RoomSlide roomType={dayType} />
          </SwiperSlide>
        ))}
      </Swiper>

      <PWAInstallBanner />
      <Suspense>
        <EventBanner />
      </Suspense>
    </div>
  );
};

export default RoutinesPage;
