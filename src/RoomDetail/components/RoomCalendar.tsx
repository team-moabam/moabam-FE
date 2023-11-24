import { useRef } from 'react';
import { makeWeekCalendar } from '../utils/utils';
import RoomCalendarDate from './RoomCalendarDate';

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
  const { thisWeekTimestamp } = makeWeekCalendar(serverTime);
  const thisWeekMonth = thisWeekTimestamp[3].getMonth() + 1;

  return (
    <div className="mb-[3.19rem] mt-[1.87rem]">
      <h4 className="pb-2 text-base text-black dark:text-white">
        2023년 {thisWeekMonth}월
      </h4>
      <div
        className="flex justify-between"
        ref={dateRef}
      >
        {thisWeekTimestamp.map((thisDate) => (
          <RoomCalendarDate
            thisDate={thisDate}
            certifiedDates={certifiedDates}
            certifyTime={certifyTime}
            serverTime={serverTime}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomCalendar;
