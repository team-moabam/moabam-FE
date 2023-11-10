import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { iconButtonStyle, errorStyle } from '../constants/styles';
import { USER_COUNT } from '../constants/literals';
import { Icon } from '@/shared/Icon';

const UserCount = () => {
  const {
    setValue,
    watch,
    formState: { errors }
  } = useFormContext<{ userCount: number }>();

  const watchUserCount = watch('userCount');

  const setUserCount = useCallback(
    (count: number) => {
      if (count <= 0 || count > USER_COUNT.max) {
        return;
      }

      setValue('userCount', count);
    },
    [setValue]
  );

  return (
    <>
      <div className="flex items-center justify-center gap-10">
        <Icon
          icon="FaMinusCircle"
          size="3xl"
          className={iconButtonStyle}
          onClick={() => setUserCount(watchUserCount - 1)}
        />
        <b className="text-xl">{watchUserCount} 명</b>
        <Icon
          icon="FaPlusCircle"
          size="3xl"
          className={iconButtonStyle}
          onClick={() => setUserCount(watchUserCount + 1)}
        />
      </div>
      {errors.userCount && (
        <p className={errorStyle}>{errors.userCount.message}</p>
      )}
    </>
  );
};

export default UserCount;
