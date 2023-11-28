import { useSuspenseQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { roomOptions } from '@/core/api/options';
import {
  TIME_RANGE,
  ROOM_TYPES,
  ROOM_COUNT
} from '@/RoomForm/constants/literals';
import {
  headingStyle,
  descriptionStyle,
  errorStyle
} from '../constants/styles';
import { Inputs } from '../hooks/useRoomForm';
import BirdCard from '../components/BirdCard';

// 데이터 패칭을 Page에서 할지, BirdStep에서 할지
// 스켈레톤 UI는 BirdStep에서 보여줘야 할텐데..
// 스켈레톤은 BirdStep에서 보여줄꺼지만, 패칭중에 네비바가 작동하면 안된다.
// 어떡하지

// useSuspenseQuery는 BirdStep에서 쓰고
// 네비바에서도 추가로 useQuery의 isPending을 써서 로딩중에 못넘어가게 하자.

const BirdStep = () => {
  const {
    setValue,
    watch,
    formState: { errors }
  } = useFormContext<Inputs>();

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
      <h1 className={headingStyle}>
        <strong>어떤 새를</strong>
        <p>키우는 방일까요?</p>
      </h1>

      <p className={descriptionStyle}>
        방마다 정해진 새는 <b>변경할 수 없어요.</b>
      </p>

      <section className="flex justify-around gap-10 pt-10 max-[320px]:flex-col">
        {ROOM_TYPES.map((roomType) => (
          <div className="w-full">
            <BirdCard
              key={roomType}
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
      </section>

      {errors.roomType && (
        <p className={errorStyle}>{errors.roomType.message}</p>
      )}
    </>
  );
};

export default BirdStep;
