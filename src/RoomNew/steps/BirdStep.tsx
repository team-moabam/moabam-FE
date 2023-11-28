import { useFormContext } from 'react-hook-form';
import {
  headingStyle,
  descriptionStyle,
  errorStyle
} from '../constants/styles';
import { Inputs } from '../hooks/useRoomForm';
import BirdCardSection from '../components/BirdCardSection';

// useSuspenseQuery는 BirdStep에서 쓰고
// 네비바에서도 추가로 useQuery의 isPending을 써서 로딩중에 못넘어가게 하자.

const BirdStep = () => {
  const {
    formState: { errors }
  } = useFormContext<Inputs>();

  return (
    <>
      <h1 className={headingStyle}>
        <strong>어떤 새를</strong>
        <p>키우는 방일까요?</p>
      </h1>

      <p className={descriptionStyle}>
        방마다 정해진 새는 <b>변경할 수 없어요.</b>
      </p>

      <section className="flex justify-around gap-10 pt-10 max-[320px]:flex-col">
        <BirdCardSection />
      </section>

      {errors.roomType && (
        <p className={errorStyle}>{errors.roomType.message}</p>
      )}
    </>
  );
};

export default BirdStep;
