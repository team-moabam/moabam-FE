import { createContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { RoomNotice } from '@/RoomDetail';
import { Header } from '@/shared/Header';
import { Icon } from '@/shared/Icon';
import RoomDetailContainer from '@/RoomDetail/components/RoomDetailContainer';

export const DateRoomDetailContext = createContext<{
  date: Date;
  changeDate: (value: Date) => void;
}>({
  date: new Date(),
  changeDate: (value: Date) => {}
});

const RoomDetailPage = () => {
  const roomId = '1234';
  const { data: roomDetailData, status } = useQuery({
    ...roomOptions.detail(roomId)
  });
  const [changedDate, setChangeDate] = useState<Date>(new Date());

  if (status !== 'success') return <div>임시 Loading...</div>;

  const { title, announcement } = roomDetailData;

  return (
    <div className="relative h-full overflow-y-scroll">
      <Header
        title={title}
        className="absolute z-[1] text-white"
      >
        <div className="flex">
          <Link
            to="setting"
            className="mr-[1.06rem]"
          >
            <Icon
              icon="MdEdit"
              size="xl"
            />
          </Link>
          <button>
            <Icon
              icon="BiSolidShareAlt"
              size="xl"
            />
          </button>
        </div>
      </Header>
      <RoomNotice content={announcement} />
      <DateRoomDetailContext.Provider
        value={{
          date: changedDate,
          changeDate: (dateValue: Date) => {
            setChangeDate(dateValue);
          }
        }}
      >
        <RoomDetailContainer roomDetailData={roomDetailData} />
      </DateRoomDetailContext.Provider>
    </div>
  );
};

export default RoomDetailPage;
