import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { descriptionStyle, errorStyle } from '../../constants/styles';
import { Inputs } from '../../constants/form';
import { USER_COUNT } from '../../constants/literals';
import { detailSectionStyle, headingStyle, iconButtonStyle } from './styles';
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
    <section className={detailSectionStyle}>
      <h2 className={headingStyle}>
        <b>최대 몇 명</b>의 친구들과
        <p>함께하고 싶으세요?</p>
        <p className={descriptionStyle}>(본인 포함)</p>
      </h2>
      <div className="flex items-center justify-center gap-10">
        <Icon
          icon="FaMinusCircle"
          size="3xl"
          className={iconButtonStyle}
          onClick={() => setUserCount(watchUserCount - 1)}
        />
        <b>{watchUserCount} 명</b>
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
    </section>
  );
};

export default MemberSection;
