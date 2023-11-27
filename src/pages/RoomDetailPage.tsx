import { useQuery } from '@tanstack/react-query';
import { useSuspenseQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { useRouteData } from '@/core/hooks';
import timeOption from '@/core/api/options/time';
import RoomDetailContainer from '@/RoomDetail/components/RoomDetailContainer';
import RoomDetailProvider from '@/RoomDetail/components/RoomDetailProvider';
import RoomDetailFallback from '@/RoomDetail/components/RoomDetailFallback';
import { RoomNotice } from '@/RoomDetail';
import RoomHeader from '../RoomDetail/components/RoomHeader';

const RoomDetailPage = () => {
  const {
    params: { roomId }
  } = useRouteData();

  const { data: serverTime } = useSuspenseQuery({
    ...timeOption,
    refetchInterval: 1000 * 60,
    refetchOnWindowFocus: true
  });

  const todayDate = `${serverTime.getFullYear()}-${serverTime.getMonth()}-${serverTime.getDate()}`;

  const { data: roomDetailData, status } = useQuery({
    ...roomOptions.detailByDate(roomId, todayDate),
    enabled: !!serverTime
  });

  if (status !== 'success') return <RoomDetailFallback />;

  const { title, announcement } = roomDetailData;

  return (
    <>
      <div className="relative h-full overflow-y-scroll">
        <RoomHeader title={title} />
        <RoomNotice content={announcement} />
        <RoomDetailProvider serverTime={serverTime}>
          <RoomDetailContainer roomDetailData={roomDetailData} />
        </RoomDetailProvider>
      </div>
    </>
  );
};

export default RoomDetailPage;
