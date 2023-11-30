import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import RoomDetailContainer from '@/RoomDetail/components/RoomDetailContainer';
import { RoomNotice } from '@/RoomDetail';
import { RoomDetailMeta } from '@/Meta';
import RoomHeader from './RoomHeader';
import { DateRoomDetailContext } from './RoomDetailProvider';
import RoomDetailFallback from './RoomDetailFallback';

interface RoomDetailProps {
  roomId?: string;
  checkedRoomJoin: boolean;
}

const RoomDetail = ({ roomId, checkedRoomJoin }: RoomDetailProps) => {
  const { serverTime } = useContext(DateRoomDetailContext);
  const todayDate = `${(serverTime || new Date()).getFullYear()}-${
    (serverTime || new Date()).getMonth() + 1
  }-${(serverTime || new Date()).getDate() < 10 ? 0 : ''}${(
    serverTime || new Date()
  ).getDate()}`;

  const { data: roomDetailData, status } = useQuery({
    ...roomOptions.detailByDate(roomId, todayDate),
    enabled: checkedRoomJoin
  });

  if (status !== 'success') return <RoomDetailFallback />;

  const { title, announcement, managerNickName, todayCertificateRank } =
    roomDetailData;

  return (
    <>
      <RoomDetailMeta roomTitle={title} />
      <RoomHeader
        title={title}
        checkedRoomJoin={checkedRoomJoin}
        managerNickName={managerNickName}
        todayCertificateRank={todayCertificateRank}
      />
      <RoomNotice content={announcement} />
      <RoomDetailContainer roomDetailData={roomDetailData} />
    </>
  );
};

export default RoomDetail;
