import { useEffect, useRef, useState } from 'react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Mousewheel
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './TimePicker.css';

interface TimePickerProps {}

const items = [
  '04 : 00',
  '05 : 00',
  '06 : 00',
  '07 : 00',
  '08 : 00',
  '09 : 00',
  '10 : 00'
];

const TimePicker = () => {
  return (
    <>
      <div>ㅇㅇ</div>
      <div>ㅇㅇ</div>
      <div>ㅇㅇ</div>
      <div>ㅇㅇ</div>
      <div>ㅇㅇ</div>
      <div>ㅇㅇ</div>
      <div>ㅇㅇ</div>
      <div>ㅇㅇ</div>
      <Swiper
        className="time-picker flex h-44 cursor-pointer select-none items-center"
        modules={[FreeMode, Mousewheel]}
        direction="vertical"
        slidesPerView={3}
        slideToClickedSlide={true}
        centeredSlides={true}
        mousewheel={{
          sensitivity: 0.5,
          releaseOnEdges: true
        }}
        freeMode={{
          enabled: true,
          sticky: true,
          momentumRatio: 0.25,
          momentumVelocityRatio: 0.25,
          minimumVelocity: 0.1
        }}
        onSlideChange={(swiper) => console.log(swiper)}
      >
        {Array.from({ length: 50 }).map((_, index) => (
          <SwiperSlide
            className="flex items-center justify-center transition-all duration-300 ease-in-out"
            key={index}
          >
            Slide {index}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TimePicker;
