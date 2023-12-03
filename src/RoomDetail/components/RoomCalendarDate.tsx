import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Icon } from '@/shared/Icon';
import { Toast } from '@/shared/Toast';
import { DAY_OF_THE_WEEK } from '../constants/constant';
import { DateRoomDetailContext } from './RoomDetailProvider';

interface RoomCalendarDateProps {
  thisDate: Date;
  certifiedDates: string[];
}

const RoomCalendarDate = ({
  thisDate,
  certifiedDates
}: RoomCalendarDateProps) => {
  const { selectDate, chooseDate, serverTime, roomCreatedDate } = useContext(
    DateRoomDetailContext
  );

  const nowTime = serverTime.getTime();

  const thisDateDate = thisDate.getDate();
  const thisDateTime = thisDate.getTime();
  const thisDateDay = thisDate.getDay();
  const langKoDay = DAY_OF_THE_WEEK[thisDateDay];
  const roomCreateDateTime = new Date(roomCreatedDate).getTime();

  const chooseDateString = `${chooseDate.getFullYear()}-${
    chooseDate.getMonth() + 1
  }-${chooseDate.getDate()}`;
  const thisDateString = `${thisDate.getFullYear()}-${
    thisDate.getMonth() + 1
  }-${thisDateDate}`;

  const bug = certifiedDates.find((el) => el === thisDateString);

  const handleDateClick = (thisDate: Date) => {
    if (nowTime >= thisDateTime && thisDateTime >= roomCreateDateTime) {
      selectDate(thisDate);
    } else if (thisDateTime < roomCreateDateTime) {
      Toast.show(
        {
          message: '방 생성 전 날짜입니다',
          status: 'info'
        },
        2000
      );
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
        'relative flex h-[5.87rem] w-[3.12rem] cursor-default flex-col items-center rounded-[0.62rem] border-[0.06rem] border-transparent pt-1 text-center',
        {
          'text-dark-gray':
            serverTime.getTime() < thisDate.getTime() ||
            thisDateTime < roomCreateDateTime,
          'text-black dark:text-white':
            serverTime.getTime() >= thisDate.getTime() &&
            thisDateTime >= roomCreateDateTime,
          'border-light-point text-light-point dark:border-dark-point dark:text-dark-point ':
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
