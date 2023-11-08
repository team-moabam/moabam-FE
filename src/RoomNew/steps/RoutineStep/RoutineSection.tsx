import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Inputs } from '../../constants/form';
import { ROUTINE_COUNT, ROUTINE_NAME } from '../../constants/literals';
import { errorStyle } from '../../constants/styles';
import { detailSectionStyle, headingStyle, iconButtonStyle } from './styles';
import { Icon } from '@/shared/Icon';
import { InnerTextInput } from '@/shared/Input';

const RoutineSection = () => {
  const {
    register,
    watch,
    control,
    formState: { errors }
  } = useFormContext<Inputs>();

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
    <section className={detailSectionStyle}>
      <h2 className={headingStyle}>
        같이 <b>어떤 루틴</b>을 해볼까요?
      </h2>
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
              <p className={errorStyle}>
                {errors.routines[idx]?.value?.message}
              </p>
            )}
          </li>
        ))}

        {errors.routines && (
          <p className={errorStyle}>{errors.routines?.message}</p>
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
    </section>
  );
};

export default RoutineSection;
