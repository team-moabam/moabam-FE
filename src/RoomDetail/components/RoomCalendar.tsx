import clsx from 'clsx';
import { Icon } from '@/shared/Icon';

const calendar = [
  {
    day: '월',
    date: '8',
    bug: true,
    point: false
  },
  {
    day: '화',
    date: '9',
    bug: true,
    point: false
  },
  {
    day: '수',
    date: '10',
    bug: false,
    point: false
  },
  {
    day: '목',
    date: '11',
    bug: true,
    point: true
  },
  {
    day: '금',
    date: '12',
    bug: true,
    point: false
  },
  {
    day: '토',
    date: '13',
    bug: false,
    point: false
  },
  {
    day: '일',
    date: '14',
    bug: true,
    point: false
  }
];

const RoomCalendar = () => {
  return (
    <div className="mb-[3.19rem] mt-[1.87rem]">
      <h4 className="pb-2 text-base text-black dark:text-white">2023년 10월</h4>
      <div className="flex justify-between">
        {calendar.map(({ day, date, point, bug }) => {
          const RoomCalendarStyle = {
            calendarItem: clsx(
              'flex h-[5.87rem] w-[3.12rem] flex-col items-center rounded-[0.62rem]  pt-1 text-center ',
              {
                'border-light-point text-light-point dark:border-dark-point dark:text-dark-point border-[0.06rem]':
                  point === true,
                'text-darkGray': point === false
              }
            )
          };

          return (
            <div
              className={RoomCalendarStyle.calendarItem}
              key={day}
            >
              <div className="mb-1 text-sm">{day}</div>
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
