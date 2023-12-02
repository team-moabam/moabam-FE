import { useState, useRef, Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import { SwiperClass } from 'swiper/react';
import { useMoveRoute } from '@/core/hooks';
import SlideDown from '@/StartSlide/components/SlideDown';
import FakeStartPage from '@/StartSlide/components/FakeStartPage';
import { EventBanner } from '@/Promotion';
import { PWAInstallBanner } from '@/PWAInstallBanner';
import { SlideController, useDayTypes, RoomSlide, DayInfo } from '@/RoomSlide';
import { FakeRoutinesPage } from '@/StartSlide';

const RoutinesPage = () => {
  const { DAY_TYPES, toggleDayType, dayType } = useDayTypes();
  const [routineSwiper, setRoutineSwiper] = useState<SwiperClass | null>(null);
  const [controllSwiper, setControllSwiper] = useState<SwiperClass | null>(
    null
  );

  const handleClickController = () => {
    if (dayType === DAY_TYPES[0]) {
      routineSwiper?.slideNext();
    } else {
      routineSwiper?.slidePrev();
    }
  };

  const moveTo = useMoveRoute();

  return (
    <>
      <div className="flex h-full flex-col items-center overflow-auto">
        <div className="mb-4 mt-8 flex w-full items-center justify-between px-10 pr-8">
          <DayInfo dayType={dayType} />
          <SlideController
            control={routineSwiper}
            onSwiper={setControllSwiper}
            onClick={handleClickController}
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
      <SlideDown
        className="absolute top-[-96%] z-[100] h-full w-full bg-yellow-200"
        fullPercentage={96}
        onSlideDown={() => moveTo('start')}
      >
        <FakeStartPage dayType={DAY_TYPES[0]} />
      </SlideDown>
    </>
  );
};

export default RoutinesPage;
