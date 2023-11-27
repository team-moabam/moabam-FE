import { useRef } from 'react';
import { useContext } from 'react';
import { makeWeekCalendar } from '../utils/makeWeekCalendar';
import RoomCalendarDate from './RoomCalendarDate';
import { DateRoomDetailContext } from './RoomDetailProvider';
interface RoomCalendarProps {
  certifiedDates: string[];
  certifyTime: number;
}

const RoomCalendar = ({ certifiedDates, certifyTime }: RoomCalendarProps) => {
  const dateRef = useRef<HTMLDivElement>(null);

  const { serverTime } = useContext(DateRoomDetailContext);
  const { thisWeekDateObjectArray } = makeWeekCalendar(serverTime);

  const thisWeekYearText = serverTime.getFullYear();
  const thisWeekMonthText = serverTime.getMonth() + 1;

  return (
    <div className="mb-[3.19rem] mt-[1.87rem]">
      <h4 className="pb-2 text-base text-black dark:text-white">
        {thisWeekYearText}년 {thisWeekMonthText}월
      </h4>
      <div
        className="flex justify-between"
        ref={dateRef}
      >
        {thisWeekDateObjectArray.map((thisDate) => (
          <RoomCalendarDate
            key={thisDate.getDate()}
            thisDate={thisDate}
            certifiedDates={certifiedDates}
            certifyTime={certifyTime}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomCalendar;
