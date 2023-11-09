import { useFormContext } from 'react-hook-form';
import { Inputs } from '@/RoomSetting/constants/form';
import { PASSWORD } from '@/RoomForm/constants/literals';
import { errorStyle, labelStyle } from './styles';
import { PasswordInput } from '@/shared/Input';

const PasswordSection = () => {
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
      <label className={labelStyle}>비밀번호</label>
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

export default PasswordSection;
