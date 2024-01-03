import { Suspense } from 'react';
import { ErrorBoundary } from '@suspensive/react';
import { DayType } from '@/core/types/Room';
import { Deffered } from '@/shared/Deffered';
import { NetworkFallback } from '@/shared/ErrorBoundary';
import RoomData from './RoomData';
import RoomDataFallback from './RoomDataFallback';

interface RoomSlideProps {
  roomType: DayType;
}

const RoomSlide = ({ roomType }: RoomSlideProps) => {
  return (
    <div className="h-full overflow-auto px-8 pt-1">
      <ErrorBoundary fallback={<NetworkFallback />}>
        <Suspense fallback={<RoomDataFallback />}>
          <RoomData dayType={roomType} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
export default RoomSlide;
