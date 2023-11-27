import clsx from 'clsx';
import { PASSWORD } from '@/RoomForm/constants/literals';
import { Password } from '@/RoomForm';
import { headingStyle, descriptionStyle } from '../constants/styles';

const PasswordStep = () => {
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

      <Password placeholder="비워두시면 공개방이 됩니다" />
    </>
  );
};

export default PasswordStep;
