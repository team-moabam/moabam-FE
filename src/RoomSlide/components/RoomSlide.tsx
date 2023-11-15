import { Suspense } from 'react';
import { DAY_TYPE } from '../constants/dayType';
import RoomData from './RoomData';
import RoomDataFallback from './RoomDataFallback';
import { Deffered } from '@/shared/Deffered';
import { DayType } from '@/core/types/Room';

interface RoomSlideProps {
  type: DayType;
}

const RoomSlide = ({ type }: RoomSlideProps) => {
  const { TITLE, START, END } = DAY_TYPE[type];
  return (
    <div className="h-full overflow-auto p-8">
      <div className="mb-5 flex items-end gap-3">
        <div className="font-IMHyemin-bold text-xl">{TITLE}</div>
        <div className="text-sm text-dark-gray">
          {START} ~ {END}시
        </div>
      </div>
      <Suspense
        fallback={
          <Deffered>
            <RoomDataFallback />
          </Deffered>
        }
      >
        <RoomData dayType={type} />
      </Suspense>
    </div>
  );
};
export default RoomSlide;
