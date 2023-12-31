import { ErrorBoundary } from '@suspensive/react';
import { useQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { useRouteData } from '@/core/hooks';
import timeOption from '@/core/api/options/time';
import { STORAGE_KEYS } from '@/core/constants/storageKeys';
import { NetworkFallback } from '@/shared/ErrorBoundary';
import RoomDetail from '@/domain/RoomDetail/components/RoomDetail';
import RoomSemi from '@/domain/RoomDetail/components/RoomSemi';
import RoomDetailFallback from '@/domain/RoomDetail/components/RoomDetailFallback';

const RoomDetailPage = () => {
  const {
    params: { roomId }
  } = useRouteData();

  const { data: serverTime } = useQuery({
    ...timeOption,
    refetchInterval: 1000 * 60 * 10,
    refetchOnWindowFocus: true
  });

  const { data: checkedRoomJoin, status } = useQuery({
    ...roomOptions.checkRoomJoin(roomId)
  });

  if (status !== 'success') return <RoomDetailFallback />;

  const currentVisitedRoom = sessionStorage.getItem(STORAGE_KEYS.VISITED_ROOM);
  if (checkedRoomJoin) {
    if (roomId) {
      sessionStorage.setItem(STORAGE_KEYS.VISITED_ROOM, roomId);
    }
  } else if (roomId === currentVisitedRoom) {
    sessionStorage.removeItem(STORAGE_KEYS.VISITED_ROOM);
  }

  return (
    <>
      <div className="relative h-full overflow-y-scroll">
        <ErrorBoundary fallback={<NetworkFallback />}>
          {checkedRoomJoin ? (
            <RoomDetail
              serverTime={serverTime || new Date()}
              roomId={roomId}
              checkedRoomJoin={checkedRoomJoin}
            />
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
