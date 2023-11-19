import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { RoomInfo, RoomWorkspace } from '@/RoomDetail';
import { DateRoomDetailContext } from '@/pages/RoomDetailPage';
import { RoomInfo as RoomInfoType } from '@/core/types/Room';
interface RoomDetailContainerProps {
  roomDetailData: RoomInfoType;
}

const RoomDetailContainer = ({ roomDetailData }: RoomDetailContainerProps) => {
  const { date } = useContext(DateRoomDetailContext);
  const roomId = '1234';
  const stringDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  const { data: roomDetailDataByDate, status } = useQuery({
    ...roomOptions.detailByDate(roomId, stringDate)
  });
  if (status !== 'success') return <div>임시 Loading...</div>;

  return (
    <>
      <div className="h-[20.56rem] bg-[url('/level1.png')] bg-cover bg-no-repeat text-white">
        <RoomInfo {...(stringDate ? roomDetailDataByDate : roomDetailData)} />
      </div>
      <div className="px-[1.81rem] pb-[1.62rem] pt-[1.88rem]">
        <RoomWorkspace
          {...(stringDate ? roomDetailDataByDate : roomDetailData)}
        />
      </div>
    </>
  );
};

export default RoomDetailContainer;
