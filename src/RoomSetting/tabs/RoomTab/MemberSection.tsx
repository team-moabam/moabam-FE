import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { Inputs } from '@/RoomSetting/constants/form';
import { iconButtonStyle, errorStyle, labelStyle } from './styles';
import { USER_COUNT } from '@/RoomNew';
import { Icon } from '@/shared/Icon';

const MemberSection = () => {
  const {
    setValue,
    watch,
    formState: { errors }
  } = useFormContext<Inputs>();

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
      <label className={labelStyle}>인원</label>
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

export default MemberSection;
