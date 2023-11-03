import clsx from 'clsx';
import { Icon } from '@/shared/Icon';

const RoomCalendar = () => {
  return (
    <div className="mb-[3.19rem]">
      <h4 className="pb-[0.5rem] text-base text-black dark:text-white">
        2023년 10월
      </h4>
      <div className="flex justify-between">
        {[
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
        ].map((el) => {
          const RoomCalendarStyle = {
            calendarItem: clsx(
              'flex h-[5.87rem] w-[3.12rem] flex-col items-center rounded-[0.62rem] border-[0.06rem] pt-[0.2rem] text-center ',
              {
                'border-light-point text-light-point dark:border-dark-point dark:text-dark-point':
                  el.point === true,
                'text-darkGray': el.point === false
              }
            )
          };

          return (
            <div className={RoomCalendarStyle.calendarItem}>
              <div className="mb-[0.25rem] text-[0.87rem]">{el.day}</div>
              <div className="mb-[0.55rem] text-[1.5rem]">{el.date}</div>
              <div className="flex justify-center">
                {el.bug && (
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
