import { Suspense } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { roomOptions } from '@/core/api/options';
import { QueryErrorBoundary, NetworkFallback } from '@/shared/ErrorBoundary';
import {
  ROOM_COUNT,
  ROOM_TYPES,
  TIME_RANGE
} from '@/domain/RoomForm/constants/literals';
import { Inputs } from '../hooks/useRoomForm';
import BirdCard from './BirdCard';
import BirdCardFallback from './BirdCardFallback';

const BirdCardSectionComponent = () => {
  const { setValue, watch } = useFormContext<Inputs>();

  const watchType = watch('roomType');

  const { data: roomCount } = useSuspenseQuery({
    ...roomOptions.myJoin(),
    select: (data) => ({
      MORNING: data.participatingRooms.filter(
        (room) => room.roomType === 'MORNING'
      ).length,
      NIGHT: data.participatingRooms.filter((room) => room.roomType === 'NIGHT')
        .length
    })
  });

  const isFull = (type: Inputs['roomType']) => {
    return roomCount[type] >= ROOM_COUNT.max;
  };

  return (
    <>
      {ROOM_TYPES.map((roomType) => (
        <div
          className="w-full"
          key={roomType}
        >
          <BirdCard
            type={roomType}
            active={watchType === roomType}
            disabled={isFull(roomType)}
            onClick={() => {
              setValue('roomType', roomType);
              setValue('certifyTime', TIME_RANGE[roomType][0]);
            }}
          />
          {isFull(roomType) && (
            <p className="mt-2 text-center text-sm text-red-500">
              루틴방이 꽉 찼어요!
            </p>
          )}
        </div>
      ))}
    </>
  );
};

const BirdCardSection = () => {
  return (
    <QueryErrorBoundary fallback={<NetworkFallback />}>
      <Suspense
        fallback={
          <>
            <BirdCardFallback />
            <BirdCardFallback />
          </>
        }
      >
        <BirdCardSectionComponent />
      </Suspense>
    </QueryErrorBoundary>
  );
};

export default BirdCardSection;
