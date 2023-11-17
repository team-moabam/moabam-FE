import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { makeDays } from '../utils/utils';
import { DAY_OF_THE_WEEK } from '../constants/constant';
import { Icon } from '@/shared/Icon';

interface RoomCalendarProps {
  certifiedDates: string[];
}

const RoomCalendar = ({ certifiedDates }: RoomCalendarProps) => {
  const [selectDay, setSelectDay] = useState<number | null>(null);
  const dayRef = useRef<HTMLDivElement>(null);

  const { thisWeekDays, today } = makeDays();
  const stringThisWeekDays = thisWeekDays.map(
    (el) => `${el.getFullYear()}-${el.getMonth() + 1}-${el.getDate()}`
  );

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (dayRef.current && !dayRef.current?.contains(e.target as Node)) {
        setSelectDay(null);
      }
    };
    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [setSelectDay, selectDay]);

  return (
    <div className="mb-[3.19rem] mt-[1.87rem]">
      <h4 className="pb-2 text-base text-black dark:text-white">2023년 10월</h4>
      <div
        className="flex justify-between"
        ref={dayRef}
      >
        {stringThisWeekDays.map((value, idx) => {
          const todayDate = today.getDate();

          const date = new Date(value).getDate();
          const day = DAY_OF_THE_WEEK[new Date(value).getDay()];
          const bug = certifiedDates.find((el) => el === value);

          const RoomCalendarStyle = {
            calendarItem: clsx(
              'flex h-[5.87rem] w-[3.12rem] cursor-default flex-col items-center  rounded-[0.62rem] pt-1 text-center',
              {
                'border-light-point text-light-point dark:border-dark-point dark:text-dark-point border-[0.06rem]':
                  todayDate === date,
                'text-dark-gray': todayDate !== date,
                'bg-light-gray': idx === selectDay && todayDate > date
              }
            )
          };

          return (
            <div
              className={RoomCalendarStyle.calendarItem}
              key={day}
              onClick={() => {
                setSelectDay(idx);
                // TODO 해당 날짜의 데이터 불러오기
              }}
            >
              <div className="mb-1 text-sm ">{day}</div>
              <div className="mb-2 text-2xl">{date}</div>
              <div className="flex justify-center">
                {bug && (
                  <Icon
                    icon="BiBugAlt"
                    size="sm"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomCalendar;
