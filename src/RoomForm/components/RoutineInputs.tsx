import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ROUTINE_COUNT, ROUTINE_NAME } from '@/RoomNew/index';
import { errorStyle, iconButtonStyle } from '../constants/styles';
import { InnerTextInput } from '@/shared/Input';
import { Icon } from '@/shared/Icon';

const RoutineInputs = () => {
  const {
    register,
    watch,
    control,
    formState: { errors }
  } = useFormContext<{ routines: Array<{ value: string }> }>();

  const watchRoutines = watch('routines');

  const {
    append,
    fields: routines,
    remove
  } = useFieldArray({
    name: 'routines',
    control
  });

  const appendRoutine = useCallback(() => {
    if (routines.length >= ROUTINE_COUNT.max) {
      return;
    }

    append({ value: '' });
  }, [routines.length, append]);

  const removeRoutine = useCallback(
    (idx: number) => {
      remove(idx);
    },
    [remove]
  );

  return (
    <ul className="flex flex-col gap-4">
      {routines.map((routine, idx) => (
        <li
          className="w-full"
          key={routine.id}
        >
          <div className="relative w-full">
            <InnerTextInput
              {...register(`routines.${idx}.value`)}
              wrapperStyle="w-full"
              textStyle="text-xs text-gray-400"
              text={
                watchRoutines[idx].value.length.toString() +
                ' / ' +
                ROUTINE_NAME.max
              }
              placeholder="루틴 이름"
              maxLength={ROUTINE_NAME.max}
            />
            {idx !== 0 && (
              <div
                className="absolute right-0 top-1/2 -mr-8 flex h-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-l-lg bg-dark-gray px-1 text-white transition-all hover:bg-gray-600"
                onClick={() => removeRoutine(idx)}
              >
                <Icon
                  icon="CgClose"
                  size="sm"
                />
              </div>
            )}
          </div>
          {errors.routines?.[idx] && (
            <p className={errorStyle}>{errors.routines[idx]?.value?.message}</p>
          )}
        </li>
      ))}

      {errors.routines && (
        <li className={errorStyle}>{errors.routines?.message}</li>
      )}

      <li className="flex flex-col items-center gap-3">
        <Icon
          className={iconButtonStyle}
          icon="FaPlusCircle"
          size="3xl"
          onClick={appendRoutine}
        />
        <div className="text-center text-xs">
          {routines.length} / {ROUTINE_COUNT.max}
        </div>
      </li>
    </ul>
  );
};

export default RoutineInputs;
