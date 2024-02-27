import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { PasswordInput } from '@/shared/Input';
import { FORM_LITERAL } from '@/domain/RoomForm/constants/literals';
import { errorStyle } from '../constants/styles';

interface PasswordProps {
  placeholder: string;
}

const Password = ({ placeholder }: PasswordProps) => {
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
        placeholder={placeholder}
        maxLength={FORM_LITERAL.password.max.value}
        onChange={handleChangePassword}
      />
      {errors.password && (
        <p className={errorStyle}>{errors.password.message}</p>
      )}
    </>
  );
};

export default Password;
