import { Suspense } from 'react';
import { useRouteData } from '@/core/hooks';
import { QueryErrorBoundary, NetworkFallback } from '@/shared/ErrorBoundary';
import { Header } from '@/shared/Header';
import { Tab, TabItem } from '@/shared/Tab';
import { RoomTab, MemberTab, RemoveTab, LoadingFallback } from '@/RoomSetting';

const RoomSettingPage = () => {
  const { params } = useRouteData();
  const roomId = params.roomId || '';

  console.log('원인 분석중');

  return (
    <>
      <Header prev="roomDetail" />

      <QueryErrorBoundary fallback={<NetworkFallback />}>
        <Tab
          align="center"
          itemStyle="mt-10 px-8"
        >
          <TabItem title="방 관리">
            {/* <Suspense fallback={<LoadingFallback />}>
              <RoomTab roomId={roomId} />
            </Suspense> */}
          </TabItem>
          <TabItem title="멤버 관리">
            {/* <Suspense fallback={<LoadingFallback />}>
              <MemberTab roomId={roomId} />
            </Suspense> */}
          </TabItem>
          <TabItem title="방 삭제">
            {/* <Suspense fallback={<LoadingFallback />}>
              <RemoveTab roomId={roomId} />
            </Suspense> */}
          </TabItem>
        </Tab>
      </QueryErrorBoundary>
    </>
  );
};

export default RoomSettingPage;
