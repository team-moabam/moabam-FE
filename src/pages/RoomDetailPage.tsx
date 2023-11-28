import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { useQuery } from '@tanstack/react-query';
import { roomOptions } from '@/core/api/options';
import { useRouteData } from '@/core/hooks';
import timeOption from '@/core/api/options/time';
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

  return (
    <>
      <div className="relative h-full overflow-y-scroll">
        <ErrorBoundary fallback={<NetworkFallback />}>
          <Suspense fallback={<RoomDetailFallback />}>
            {checkedRoomJoin ? (
              <RoomDetailProvider serverTime={serverTime || new Date()}>
                <RoomDetail roomId={roomId} />
              </RoomDetailProvider>
            ) : (
              <RoomSemi
                roomId={roomId}
                serverTime={serverTime || new Date()}
              />
            )}
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default RoomDetailPage;
