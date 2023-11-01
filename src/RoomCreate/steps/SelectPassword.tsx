import clsx from 'clsx';
import PageTemplate from '../templates/PageTemplate';
import { headingStyle, descriptionStyle } from '../constants/styles';
import { PasswordInput } from '@/shared/Input';

const SelectPassword = () => {
  return (
    <PageTemplate>
      <h1 className={headingStyle}>
        <strong>마지막 !</strong>
        <p>
          <b>비밀번호</b>를 걸까요?
        </p>
      </h1>

      <p className={clsx(descriptionStyle, 'mb-10')}>
        선택사항입니다. 4자리에서 8자리 숫자를 적어주세요!
      </p>

      <PasswordInput placeholder="비워두시면 공개방이 됩니다" />
    </PageTemplate>
  );
};

export default SelectPassword;
