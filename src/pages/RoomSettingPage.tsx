import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { useRouteData } from '@/core/hooks';
import { Header } from '@/shared/Header';
import { Tab, TabItem } from '@/shared/Tab';
import { RoomTab, MemberTab, RemoveTab, LoadingFallback } from '@/RoomSetting';

const RoomSettingPage = () => {
  const { params } = useRouteData();
  const roomId = params.roomId || '';

  return (
    <>
      <Header prev="roomDetail" />

      <ErrorBoundary fallback={<div>Error Occured in RoomSettingPage!</div>}>
        <Tab
          align="center"
          itemStyle="mt-10 px-8"
        >
          <TabItem title="방 관리">
            <Suspense fallback={<LoadingFallback />}>
              <RoomTab roomId={roomId} />
            </Suspense>
          </TabItem>
          <TabItem title="멤버 관리">
            <Suspense fallback={<LoadingFallback />}>
              <MemberTab roomId={roomId} />
            </Suspense>
          </TabItem>
          <TabItem title="방 삭제">
            <Suspense fallback={<LoadingFallback />}>
              <RemoveTab roomId={roomId} />
            </Suspense>
          </TabItem>
        </Tab>
      </ErrorBoundary>
    </>
  );
};

export default RoomSettingPage;
