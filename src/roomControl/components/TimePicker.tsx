import { useState } from 'react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './TimePicker.css';

interface TimePickerProps {}

// const items = [
//   '04 : 00',
//   '05 : 00',
//   '06 : 00',
//   '07 : 00',
//   '08 : 00',
//   '09 : 00',
//   '10 : 00'
// ];

const items = Array.from({ length: 24 }).map(
  (_, i) => `${i.toString().padStart(2, '0')} : 00`
);

const TimePicker = () => {
  const [selected, setSelected] = useState(0);

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
        className="time-picker flex h-44 w-40 cursor-pointer select-none items-center rounded-2xl shadow-md"
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
        onSlideChange={(swiper) => console.log(swiper.activeIndex)}
      >
        {items.map((item) => (
          <SwiperSlide
            className="flex items-center justify-center text-2xl transition-all duration-300 ease-in-out"
            key={item}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TimePicker;
