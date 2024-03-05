import { useCallback } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Icon } from '@/shared/Icon';
import { iconButtonStyle, errorStyle } from '../constants/styles';
import { FORM_LITERAL } from '../constants/literals';

const UserCount = () => {
  const {
    setValue,
    formState: { errors },
    control
  } = useFormContext<{ userCount: number }>();

  const watchUserCount = useWatch({ name: 'userCount', control });

  const handleSetUserCount = useCallback(
    (count: number) => {
      if (count <= 0 || count > FORM_LITERAL.userCount.max.value) {
        return;
      }

      setValue('userCount', count);
    },
    [setValue]
  );

  return (
    <>
      <div className="flex items-center justify-center gap-10">
        <button type="button">
          <Icon
            icon="FaMinusCircle"
            size="3xl"
            className={iconButtonStyle}
            onClick={() => handleSetUserCount(watchUserCount - 1)}
          />
        </button>
        <b className="text-xl">{watchUserCount} 명</b>
        <button type="button">
          <Icon
            icon="FaPlusCircle"
            size="3xl"
            className={iconButtonStyle}
            onClick={() => handleSetUserCount(watchUserCount + 1)}
          />
        </button>
      </div>
      {errors.userCount && (
        <p className={errorStyle}>{errors.userCount.message}</p>
      )}
    </>
  );
};

export default UserCount;
