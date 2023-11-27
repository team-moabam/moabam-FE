import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import RoomData from './RoomData';
import RoomDataFallback from './RoomDataFallback';
import { Deffered } from '@/shared/Deffered';
import { NetworkFallback } from '@/shared/ErrorBoundary';
import { DayType } from '@/core/types/Room';

interface RoomSlideProps {
  roomType: DayType;
}

const RoomSlide = ({ roomType }: RoomSlideProps) => {
  return (
    <div className="h-full overflow-auto px-8 pt-1">
      <ErrorBoundary fallback={<NetworkFallback />}>
        <Suspense
          fallback={
            <Deffered>
              <RoomDataFallback />
            </Deffered>
          }
        >
          <RoomData dayType={roomType} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
export default RoomSlide;
