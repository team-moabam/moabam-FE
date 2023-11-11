import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { PASSWORD } from '@/RoomForm/constants/literals';
import { errorStyle } from '../constants/styles';
import { PasswordInput } from '@/shared/Input';

const Password = () => {
  const {
    register,
    setValue,
    formState: { errors }
  } = useFormContext<{ password: string }>();

  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/[^0-9]/g, '');

      setValue('password', value);
    },
    [setValue]
  );

  return (
    <>
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

export default Password;
