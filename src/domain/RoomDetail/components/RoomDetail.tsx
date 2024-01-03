import { useQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import RoomDetailContainer from '@/domain/RoomDetail/components/RoomDetailContainer';
import { RoomNotice } from '@/domain/RoomDetail';
import { RoomDetailMeta } from '@/domain/Meta';
import RoomHeader from './RoomHeader';
import RoomDetailProvider from './RoomDetailProvider';
import RoomDetailFallback from './RoomDetailFallback';

interface RoomDetailProps {
  roomId?: string;
  checkedRoomJoin: boolean;
  serverTime: Date;
}

const RoomDetail = ({
  roomId,
  checkedRoomJoin,
  serverTime
}: RoomDetailProps) => {
  const todayDate = serverTime || new Date();
  const todayDateString = `${todayDate.getFullYear()}-${String(
    todayDate.getMonth() + 1
  ).padStart(2, '0')}-${
    todayDate.getDate() < 10 ? 0 : ''
  }${todayDate.getDate()}`;

  const { data: roomDetailData, status } = useQuery({
    ...roomOptions.detailByDate(roomId, todayDateString),
    enabled: checkedRoomJoin
  });

  if (status !== 'success') return <RoomDetailFallback />;

  const {
    title,
    announcement,
    managerNickName,
    todayCertificateRank,
    roomCreatedAt
  } = roomDetailData;

  return (
    <RoomDetailProvider
      serverTime={serverTime}
      roomCreatedAt={roomCreatedAt}
    >
      <RoomDetailMeta roomTitle={title} />
      <RoomHeader
        title={title}
        checkedRoomJoin={checkedRoomJoin}
        managerNickName={managerNickName}
        todayCertificateRank={todayCertificateRank}
      />
      <RoomNotice content={announcement} />
      <RoomDetailContainer roomDetailData={roomDetailData} />
    </RoomDetailProvider>
  );
};

export default RoomDetail;
