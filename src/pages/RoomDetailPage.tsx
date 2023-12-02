import { ErrorBoundary } from '@suspensive/react';
import { useQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { useRouteData } from '@/core/hooks';
import timeOption from '@/core/api/options/time';
import { STORAGE_KEYS } from '@/core/constants/storageKeys';
import { NetworkFallback } from '@/shared/ErrorBoundary';
import RoomDetail from '@/RoomDetail/components/RoomDetail';
import RoomSemi from '@/RoomDetail/components/RoomSemi';
import RoomDetailProvider from '@/RoomDetail/components/RoomDetailProvider';
import RoomDetailFallback from '@/RoomDetail/components/RoomDetailFallback';

const RoomDetailPage = () => {
  const {
    params: { roomId }
  } = useRouteData();

  const { data: serverTime } = useQuery({
    ...timeOption,
    refetchInterval: 1000 * 60,
    refetchOnWindowFocus: true
  });

  const { data: checkedRoomJoin, status } = useQuery({
    ...roomOptions.checkRoomJoin(roomId)
  });

  if (status !== 'success') return <RoomDetailFallback />;
  else if (roomId && checkedRoomJoin) {
    sessionStorage.setItem(STORAGE_KEYS.VISITED_ROOM, roomId);
  }

  return (
    <>
      <div className="relative h-full overflow-y-scroll">
        <ErrorBoundary fallback={<NetworkFallback />}>
          {checkedRoomJoin ? (
            <RoomDetailProvider serverTime={serverTime || new Date()}>
              <RoomDetail
                roomId={roomId}
                checkedRoomJoin={checkedRoomJoin}
              />
            </RoomDetailProvider>
          ) : (
            <RoomSemi
              roomId={roomId}
              serverTime={serverTime || new Date()}
              checkedRoomJoin={checkedRoomJoin}
            />
          )}
        </ErrorBoundary>
      </div>
    </>
  );
};

export default RoomDetailPage;
