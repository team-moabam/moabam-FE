import { DayType } from '@/core/types';
import { DayInfo, RoomDataFallback } from '@/RoomSlide';

interface FakeRoutinesPageProps {
  dayType: DayType;
}

const FakeRoutinesPage = ({ dayType }: FakeRoutinesPageProps) => {
  return (
    <div className="flex h-full flex-col items-center overflow-auto">
      <div className="mb-4 mt-8 flex w-full items-center justify-between px-10 pr-8">
        <DayInfo dayType={dayType} />
        <div className="h-10 w-14"></div>
      </div>

      <div className="h-full w-full">
        <div className="h-full overflow-auto px-8 pt-1">
          <RoomDataFallback />
        </div>
      </div>
    </div>
  );
};

export default FakeRoutinesPage;
