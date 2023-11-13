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

  const watchType = watch('type');

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
        {ROOM_TYPES.map((type) => (
          <BirdCard
            key={type}
            type={type}
            active={watchType === type}
            onClick={() => {
              setValue('type', type);
              setValue('certifyTime', TIME_RANGE[type][0]);
            }}
          />
        ))}
      </section>

      {errors.type && <p className={errorStyle}>{errors.type.message}</p>}
    </>
  );
};

export default BirdStep;
