import { useFormContext } from 'react-hook-form';
import { TIME_RANGE, ROOM_TYPES } from '@/RoomForm/constants/literals';
import {
  headingStyle,
  descriptionStyle,
  errorStyle
} from '../constants/styles';
import { Inputs } from '../hooks/useRoomForm';
import BirdCard from '../components/BirdCard';

const BirdStep = () => {
  const {
    setValue,
    watch,
    formState: { errors }
  } = useFormContext<Inputs>();

  const watchType = watch('roomType');

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
              disabled={roomType === 'MORNING'}
              onClick={() => {
                setValue('roomType', roomType);
                setValue('certifyTime', TIME_RANGE[roomType][0]);
              }}
            />
            {roomType === 'MORNING' && (
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
