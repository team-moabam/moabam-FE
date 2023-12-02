import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { useRouteData } from '@/core/hooks';
import { RoomInfo as RoomInfoType } from '@/core/types/Room';
import { RoomInfo, RoomWorkspace } from '@/RoomDetail';
import { DateRoomDetailContext } from './RoomDetailProvider';

interface RoomDetailContainerProps {
  roomDetailData: RoomInfoType;
}

const RoomDetailContainer = ({ roomDetailData }: RoomDetailContainerProps) => {
  const { chooseDate } = useContext(DateRoomDetailContext);

  const {
    params: { roomId }
  } = useRouteData();
  const chooseDateString = `${chooseDate.getFullYear()}-${
    chooseDate.getMonth() + 1
  }-${chooseDate.getDate() < 10 ? 0 : ''}${chooseDate.getDate()}`;

  const { data: roomDetailDataByDate, status } = useQuery({
    ...roomOptions.detailByDate(roomId, chooseDateString)
  });

  if (roomDetailDataByDate) {
    roomDetailData = roomDetailDataByDate;
  }

  const { roomImage } = roomDetailData;

  return (
    <>
      <div className="h-[20.56rem] text-white">
        <img
          className="absolute h-[20.56rem] w-full dark:brightness-[70%] dark:sepia-[0.2]"
          src={roomImage}
        ></img>
        <RoomInfo
          {...roomDetailData}
          status={status}
        />
      </div>
      <div className="px-[1.81rem] pb-[1.62rem] pt-[1.88rem]">
        <RoomWorkspace
          {...roomDetailData}
          status={status}
        />
      </div>
    </>
  );
};

export default RoomDetailContainer;
