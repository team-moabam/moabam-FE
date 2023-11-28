import { useFormContext } from 'react-hook-form';
import { formatHourString } from '@/TimePicker/utils/hour';
import { TIME_RANGE } from '@/RoomForm/constants/literals';
import { TimePicker } from '@/TimePicker';
import {
  headingStyle,
  descriptionStyle,
  errorStyle
} from '../constants/styles';
import { Inputs } from '../hooks/useRoomForm';

const TimeStep = () => {
  const {
    setValue,
    watch,
    formState: { errors }
  } = useFormContext<Inputs>();

  const watchRoomType = watch('roomType');
  const watchCertifyTime = watch('certifyTime');

  return (
    <>
      <h1 className={headingStyle}>
        <strong>언제 </strong>
        인증할까요?
      </h1>

      <p className={descriptionStyle}>
        인증 시간은 선택한 시간 전후 10분이에요
      </p>

      <section className="mt-10 flex w-full flex-col items-center gap-6">
        <div>{formatHourString(TIME_RANGE[watchRoomType][0])}</div>
        <TimePicker
          range={TIME_RANGE[watchRoomType]}
          initialTime={watchCertifyTime}
          onChangeTime={(time) => setValue('certifyTime', time)}
        />
        <div>{formatHourString(TIME_RANGE[watchRoomType][1])}</div>
      </section>

      {errors.certifyTime && (
        <p className={errorStyle}>{errors.certifyTime.message}</p>
      )}
    </>
  );
};

export default TimeStep;
