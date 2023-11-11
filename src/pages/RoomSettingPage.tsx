import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { useRouteData } from '@/core/hooks';
import { Header } from '@/shared/Header';
import { Tab, TabItem } from '@/shared/Tab';
import { RoomTab, MemberTab, RemoveTab } from '@/RoomSetting';
import { LoadingSpinner } from '@/shared/LoadingSpinner';

const RoomSettingPage = () => {
  const { params } = useRouteData();
  const roomId = Number(params.roomId);

  return (
    <>
      <Header prev="roomDetail" />

      <ErrorBoundary fallback={<div>Error Occured in RoomSettingPage!</div>}>
        <Tab
          align="center"
          itemStyle="mt-10 px-8"
        >
          <TabItem title="방 관리">
            <Suspense
              fallback={
                <div className="flex justify-center overflow-hidden">
                  <LoadingSpinner
                    size="7xl"
                    colorStyle="text-black"
                  />
                </div>
              }
            >
              <RoomTab roomId={roomId} />
            </Suspense>
          </TabItem>
          <TabItem title="멤버 관리">
            <MemberTab />
          </TabItem>
          <TabItem title="방 삭제">
            <RemoveTab />
          </TabItem>
        </Tab>
      </ErrorBoundary>
    </>
  );
};

export default RoomSettingPage;
