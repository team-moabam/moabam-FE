import { useCallback } from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { InnerTextInput } from '@/shared/Input';
import { Icon } from '@/shared/Icon';
import { FORM_LITERAL } from '../constants/literals';
import { errorStyle, iconButtonStyle } from '../constants/styles';

const Routines = () => {
  const {
    register,
    control,
    formState: { errors }
  } = useFormContext<{ routines: Array<{ value: string }> }>();

  const {
    append,
    fields: routines,
    remove
  } = useFieldArray({
    name: 'routines',
    control
  });

  const watchRoutines = useWatch({ name: 'routines', control });

  const handleAppendRoutine = useCallback(() => {
    if (routines.length >= FORM_LITERAL.routines.max.value) {
      return;
    }

    append({ value: '' });
  }, [routines.length, append]);

  const handleRemoveRoutine = useCallback(
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
                watchRoutines[idx]?.value.length.toString() +
                ' / ' +
                FORM_LITERAL.routines.item.max.value
              }
              placeholder="루틴 이름"
              maxLength={FORM_LITERAL.routines.item.max.value}
            />
            {idx !== 0 && (
              <div
                className="absolute right-0 top-1/2 -mr-8 flex h-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-l-lg bg-dark-gray px-1 text-white transition-all hover:bg-gray-600"
                onClick={() => handleRemoveRoutine(idx)}
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

      {errors.routines?.message && (
        <li className={errorStyle}>{errors.routines?.message}</li>
      )}

      <li className="flex flex-col items-center gap-3">
        <button type="button">
          <Icon
            className={iconButtonStyle}
            icon="FaPlusCircle"
            size="3xl"
            onClick={handleAppendRoutine}
          />
        </button>
        <div className="text-center text-xs">
          {routines.length} / {FORM_LITERAL.routines.max.value}
        </div>
      </li>
    </ul>
  );
};

export default Routines;
