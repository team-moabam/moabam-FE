import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { PASSWORD } from '@/RoomForm/constants/literals';
import {
  headingStyle,
  descriptionStyle,
  errorStyle
} from '../constants/styles';
import { Inputs } from '../constants/form';
import { PasswordInput } from '@/shared/Input';

const PasswordStep = () => {
  const {
    register,
    setValue,
    formState: { errors }
  } = useFormContext<Inputs>();

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');

    setValue('password', value);
  };

  return (
    <>
      <h1 className={headingStyle}>
        <strong>마지막 !</strong>
        <p>
          <b>비밀번호</b>를 걸까요?
        </p>
      </h1>

      <p className={clsx(descriptionStyle, 'mb-10')}>
        선택사항입니다. {PASSWORD.min}자리에서 {PASSWORD.max}자리 숫자를
        적어주세요!
      </p>

      <PasswordInput
        {...register('password')}
        placeholder="비워두시면 공개방이 됩니다"
        maxLength={PASSWORD.max}
        onChange={handleChangePassword}
      />

      {errors.password && (
        <p className={errorStyle}>{errors.password.message}</p>
      )}
    </>
  );
};

export default PasswordStep;
