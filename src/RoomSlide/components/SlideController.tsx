import React from 'react';
import { SwiperClass } from 'swiper/react';
import { clsx } from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';

interface SlideControllerProps {
  control: SwiperClass | null;
  onSwiper: React.Dispatch<React.SetStateAction<SwiperClass | null>>;
}

const SlideController = ({ control, onSwiper }: SlideControllerProps) => {
  return (
    <div className="relative flex h-10 w-14 items-center overflow-hidden rounded-full">
      <div
        className={clsx(
          'absolute inset-0 m-auto h-1 w-10 rounded-full',
          'bg-light-point dark:bg-dark-point'
        )}
      ></div>
      <Swiper
        className="h-5 w-8 cursor-pointer gap-0 overflow-visible"
        modules={[Controller]}
        controller={{ control }}
        onSwiper={onSwiper}
        slidesPerView={1}
        dir="rtl"
      >
        <SwiperSlide className="flex justify-end">
          <div className={clsx('relative h-full w-[0.625rem]')}>
            <div className="absolute right-0 h-full w-5 rounded-full bg-white drop-shadow"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start">
          <div className={clsx('relative h-full w-[0.625rem]')}>
            <div className="absolute left-0 h-full w-5 rounded-full bg-white drop-shadow"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideController;
