import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { DAY_OF_THE_WEEK } from '../constants/constant';
import makeCertifyTime from '../utils/makeCertifyTime';
import { DateRoomDetailContext } from './RoomDetailProvider';
import { Icon } from '@/shared/Icon';
import { Toast } from '@/shared/Toast';

interface RoomCalendarDateProps {
  thisDate: Date;
  certifiedDates: string[];
  certifyTime: number;
}

const RoomCalendarDate = ({
  thisDate,
  certifiedDates,
  certifyTime
}: RoomCalendarDateProps) => {
  const { selectDate, chooseDate, serverTime } = useContext(
    DateRoomDetailContext
  );
  const chooseDateString = `${chooseDate.getFullYear()}-${
    chooseDate.getMonth() + 1
  }-${chooseDate.getDate()}`;

  const thisDateDate = thisDate.getDate();
  const thisDateTime = thisDate.getTime();
  const thisDateDay = thisDate.getDay();
  const thisDateString = `${thisDate.getFullYear()}-${
    thisDate.getMonth() + 1
  }-${thisDateDate}`;
  const langKoDay = DAY_OF_THE_WEEK[thisDateDay];
  const bug = certifiedDates.find((el) => el === thisDateString);

  const { nowTime } = makeCertifyTime(certifyTime, serverTime);

  const handleDateClick = (thisDate: Date) => {
    if (nowTime >= thisDateTime) {
      selectDate(thisDate);
    } else {
      Toast.show(
        {
          message: '조회가 가능하지 않은 날짜입니다',
          status: 'info'
        },
        2000
      );
    }
  };

  const RoomCalendarStyle = {
    calendarItem: twMerge(
      clsx(
        'relative flex h-[5.87rem] w-[3.12rem] cursor-default flex-col items-center pt-1 text-center',
        {
          'text-dark-gray': serverTime.getTime() < thisDate.getTime(),
          'text-black dark:text-white':
            serverTime.getTime() >= thisDate.getTime(),
          'rounded-[0.62rem] border-light-point text-light-point dark:border-dark-point dark:text-dark-point border-[0.06rem]':
            thisDateString === chooseDateString
        }
      )
    )
  };

  return (
    <div
      className={RoomCalendarStyle.calendarItem}
      key={thisDateDay}
      onClick={() => handleDateClick(thisDate)}
    >
      <div className="mb-1 text-sm">{langKoDay}</div>
      <div className="mb-2 text-2xl">{thisDateDate}</div>
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
};

export default RoomCalendarDate;
