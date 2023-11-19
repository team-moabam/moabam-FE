import { useEffect, useRef, useContext } from 'react';
import clsx from 'clsx';
import { makeDays } from '../utils/utils';
import { DAY_OF_THE_WEEK } from '../constants/constant';
import { Icon } from '@/shared/Icon';
import { DateRoomDetailContext } from '@/pages/RoomDetailPage';

interface RoomCalendarProps {
  certifiedDates: string[];
}

const RoomCalendar = ({ certifiedDates }: RoomCalendarProps) => {
  const dateRef = useRef<HTMLDivElement>(null);
  const { changeDate, date: changedDate } = useContext(DateRoomDetailContext);

  const { thisWeekDates, today } = makeDays();
  const stringThisWeekDates = thisWeekDates.map(
    (el) => `${el.getFullYear()}-${el.getMonth() + 1}-${el.getDate()}`
  );

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (dateRef.current && !dateRef.current?.contains(e.target as Node)) {
        changeDate(new Date());
      }
    };
    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [changeDate]);

  return (
    <div className="mb-[3.19rem] mt-[1.87rem]">
      <h4 className="pb-2 text-base text-black dark:text-white">2023년 10월</h4>
      <div
        className="flex justify-between"
        ref={dateRef}
      >
        {stringThisWeekDates.map((value) => {
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
                'bg-light-gray': date === changedDate.getDate()
                // TODO : 캘린더 선택 기준 정의하기
              }
            )
          };

          return (
            <div
              className={RoomCalendarStyle.calendarItem}
              key={day}
              onClick={() => {
                changeDate(new Date(value));
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
