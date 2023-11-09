import { useFormContext } from 'react-hook-form';
import { ROOM_NAME } from '@/RoomForm/constants/literals';
import { Inputs } from '../../constants/form';
import { errorStyle } from '../../constants/styles';
import { detailSectionStyle, headingStyle } from './styles';
import { Input } from '@/shared/Input';

const NameSection = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext<Inputs>();

  return (
    <section className={detailSectionStyle}>
      <h2 className={headingStyle}>
        <b>방 이름</b>을 지어주세요.
      </h2>
      <Input
        {...register('title')}
        maxLength={ROOM_NAME.max}
        placeholder="짧고 명확하게!"
      />
      {errors.title && <p className={errorStyle}>{errors.title.message}</p>}
    </section>
  );
};

export default NameSection;
