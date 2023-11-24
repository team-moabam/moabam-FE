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
    <div className="relative flex w-11 items-center overflow-hidden rounded-full">
      <div
        className={clsx(
          'absolute inset-y-0 my-auto h-1 w-11 rounded-full',
          'bg-light-point dark:bg-dark-point'
        )}
      ></div>
      <Swiper
        className="h-5 w-6 cursor-pointer gap-0 overflow-visible"
        modules={[Controller]}
        controller={{ control }}
        onSwiper={onSwiper}
        slidesPerView={1}
        dir="rtl"
      >
        <SwiperSlide className="flex justify-end">
          <div
            className={clsx(
              'relative right-[0.02rem] h-full w-[0.625rem] rounded-s-full',
              'border-y-1 border-r-1 bg-white'
            )}
          ></div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-start">
          <div
            className={clsx(
              'relative left-[0.02rem] h-full w-[0.625rem] rounded-e-full',
              'border-y-1 border-l-1 bg-white '
            )}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideController;
