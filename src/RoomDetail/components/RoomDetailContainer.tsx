import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { useRouteData } from '@/core/hooks';
import { DateRoomDetailContext } from './RoomDetailProvider';
import { RoomInfo, RoomWorkspace } from '@/RoomDetail';
import { RoomInfo as RoomInfoType } from '@/core/types/Room';
interface RoomDetailContainerProps {
  roomDetailData: RoomInfoType;
  serverTime: Date;
}

const RoomDetailContainer = ({
  roomDetailData,
  serverTime
}: RoomDetailContainerProps) => {
  const { date } = useContext(DateRoomDetailContext);
  const {
    params: { roomId }
  } = useRouteData();
  const chooseDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  const { data: roomDetailDataByDate, status } = useQuery({
    ...roomOptions.detailByDate(roomId, chooseDate)
  });

  if (roomDetailDataByDate) {
    roomDetailData = roomDetailDataByDate;
  }

  return (
    <>
      <div className="h-[20.56rem] bg-[url('/level1.png')] bg-cover bg-no-repeat text-white">
        <RoomInfo
          {...roomDetailData}
          status={status}
        />
      </div>
      <div className="px-[1.81rem] pb-[1.62rem] pt-[1.88rem]">
        <RoomWorkspace
          {...roomDetailData}
          status={status}
          serverTime={serverTime}
        />
      </div>
    </>
  );
};

export default RoomDetailContainer;
