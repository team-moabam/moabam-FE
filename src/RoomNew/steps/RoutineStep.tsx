import { useFormContext } from 'react-hook-form';
import { Input } from '@/shared/Input';
import { ROOM_NAME } from '@/RoomForm/constants/literals';
import { Routines, UserCount } from '@/RoomForm';
import { errorStyle } from '../constants/styles';
import { Inputs } from '../hooks/useRoomForm';
import { descriptionStyle } from '../constants/styles';

const RoutineStep = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext<Inputs>();

  return (
    <>
      <section className={sectionStyle}>
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
      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          같이 <b>어떤 루틴</b>을 해볼까요?
        </h2>
        <Routines />
      </section>
      <section className={sectionStyle}>
        <h2 className={headingStyle}>
          <b>최대 몇 명</b>의 친구들과
          <p>함께하고 싶으세요?</p>
          <p className={descriptionStyle}>(본인 포함)</p>
        </h2>
        <UserCount />
      </section>
    </>
  );
};

export default RoutineStep;

// 섹션의 헤딩에 적용할 스타일
const headingStyle = 'mb-6';

// 섹션에 적용할 스타일
const sectionStyle = 'mb-8 text-xl leading-[2rem]';
