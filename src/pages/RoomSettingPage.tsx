import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { isAxiosError } from 'axios';
import { useRouteData } from '@/core/hooks';
import { QueryErrorBoundary, NetworkFallback } from '@/shared/ErrorBoundary';
import { Header } from '@/shared/Header';
import { Tab, TabItem } from '@/shared/Tab';
import { RoomTab, MemberTab, LoadingFallback } from '@/domain/RoomSetting';
import NotFoundPage from './NotFoundPage';

const RoomSettingPage = () => {
  const { params } = useRouteData();
  const roomId = params.roomId || '';

  return (
    <QueryErrorBoundary fallback={<NetworkFallback />}>
      <ErrorBoundary
        fallback={<NotFoundPage />}
        onError={(err) => {
          if (isAxiosError(err) && err.response?.status === 404) {
            return;
          }

          throw err;
        }}
      >
        <Header prev />
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
        </Tab>
      </ErrorBoundary>
    </QueryErrorBoundary>
  );
};

export default RoomSettingPage;
