import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { formatHourString } from '@/domain/TimePicker/utils/hour';
import { TIME_RANGE } from '@/domain/RoomForm/constants/literals';
import { TimePicker } from '@/domain/TimePicker';
import {
  headingStyle,
  descriptionStyle,
  errorStyle
} from '../constants/styles';
import { Inputs } from '../hooks/useRoomForm';

const TimeStep = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext<Inputs>();

  const watchRoomType = useWatch({ name: 'roomType', control });

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
        <Controller
          name="certifyTime"
          control={control}
          render={({ field }) => (
            <TimePicker
              range={TIME_RANGE[watchRoomType]}
              initialTime={field.value}
              onChangeTime={field.onChange}
            />
          )}
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
