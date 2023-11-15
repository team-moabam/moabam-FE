import { FreeMode, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperClass } from 'swiper/react';
import clsx from 'clsx';
import { formatHourString } from '../utils/hour';
import '../styles/TimePicker.css';

interface TimePickerProps {
  className?: string;
  range: [number, number];
  initialTime?: number;
  onChangeTime?: (time: number) => void;
}

/**
 * 시간을 선택할 수 있는 컴포넌트
 * @param range: 선택할 수 있는 시간 범위 ex) [5, 28]
 * @param initialTime: 기본으로 선택되어 있는 시간 ex) 10
 * @param onChangeTime: 시간을 선택할 때 호출되는 콜백함수
 */
const TimePicker = ({
  className,
  range,
  initialTime,
  onChangeTime
}: TimePickerProps) => {
  range = range.sort((a, b) => a - b);

  const hours = Array.from({ length: range[1] - range[0] + 1 }).map(
    (_, i) => range[0] + i
  );

  const initialSlide = hours.findIndex((v) => v === initialTime);

  const handleSlideChange = (swiper: SwiperClass) => {
    const selectedHour = hours[swiper.activeIndex];

    onChangeTime?.(selectedHour);
  };

  return (
    <Swiper
      className={clsx(
        'time-picker flex h-44 w-40 cursor-pointer select-none items-center rounded-2xl shadow-md',
        // 'border-1 dark:border-dark-gray',
        'border-y-1 border-dark-gray',
        className
      )}
      modules={[FreeMode, Mousewheel]}
      direction="vertical"
      slidesPerView={3}
      slideToClickedSlide={true}
      centeredSlides={true}
      initialSlide={initialSlide}
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
      onSlideChange={handleSlideChange}
    >
      {hours.map((hour) => (
        <SwiperSlide
          className="flex items-center justify-center text-2xl transition-all duration-300 ease-in-out"
          key={hour}
        >
          {formatHourString(hour)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TimePicker;
