import { useEffect, useRef, useContext, useMemo } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { makeWeekCalendar } from '../utils/utils';
import { DAY_OF_THE_WEEK } from '../constants/constant';
import { Icon } from '@/shared/Icon';
import { Toast } from '@/shared/Toast';
import { DateRoomDetailContext } from '@/pages/RoomDetailPage';

interface RoomCalendarProps {
  certifiedDates: string[];
  certifyTime: number;
  serverTime: Date;
}

const RoomCalendar = ({
  certifiedDates,
  certifyTime,
  serverTime
}: RoomCalendarProps) => {
  const dateRef = useRef<HTMLDivElement>(null);
  const { changeDate, date: changedDate } = useContext(DateRoomDetailContext);

  const { thisWeekTimestamp } = makeWeekCalendar(serverTime);
  const changedDateTimestamp = `${changedDate.getFullYear()}-${
    changedDate.getMonth() + 1
  }-${changedDate.getDate()}`;

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent) => {
      if (dateRef.current && !dateRef.current?.contains(e.target as Node)) {
        changeDate(serverTime);
      }
    };
    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [changeDate, serverTime]);

  return (
    <div className="mb-[3.19rem] mt-[1.87rem]">
      <h4 className="pb-2 text-base text-black dark:text-white">2023년 10월</h4>
      <div
        className="flex justify-between"
        ref={dateRef}
      >
        {thisWeekTimestamp.map((thisDate) => {
          const date = thisDate.getDate();
          const day = thisDate.getDay();
          const thisDateTimestamp = `${thisDate.getFullYear()}-${
            thisDate.getMonth() + 1
          }-${date}`;
          const langKoDay = DAY_OF_THE_WEEK[day];
          const bug = certifiedDates.find((el) => el === thisDateTimestamp);

          const RoomCalendarStyle = {
            calendarItem: twMerge(
              clsx(
                'relative flex h-[5.87rem] w-[3.12rem] cursor-default flex-col items-center  pt-1 text-center ',
                {
                  'text-dark-gray': serverTime.getTime() < thisDate.getTime(),
                  'text-black': serverTime.getTime() >= thisDate.getTime(),
                  'rounded-[0.62rem] border-light-point text-light-point dark:border-dark-point dark:text-dark-point border-[0.06rem]':
                    thisDateTimestamp === changedDateTimestamp
                }
              )
            )
          };

          return (
            <div
              className={RoomCalendarStyle.calendarItem}
              key={day}
              onClick={() => {
                const routineLimitTime = new Date(serverTime);
                routineLimitTime.setHours(certifyTime);
                routineLimitTime.setMinutes(50);

                if (serverTime.getTime() >= thisDate.getTime()) {
                  changeDate(thisDate);

                  if (
                    thisDate.getDate() === routineLimitTime.getDate() &&
                    serverTime.getTime() < routineLimitTime.getTime()
                  ) {
                    Toast.show(
                      {
                        message: '인증 시간 이후 확인 가능합니다',
                        status: 'info'
                      },
                      2000
                    );
                  }
                } else {
                  Toast.show(
                    {
                      message: '조회가 가능하지 않은 날짜입니다',
                      status: 'info'
                    },
                    2000
                  );
                }
              }}
            >
              <div className="mb-1 text-sm">{langKoDay}</div>
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
