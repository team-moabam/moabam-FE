import PageTemplate from '../templates/PageTemplate';
import { headingStyle, descriptionStyle } from '../constants/styles';

const SelectPassword = () => {
  return (
    <PageTemplate>
      <h1 className={headingStyle}>
        <strong>마지막 !</strong>
        <p>
          <strong>비밀번호</strong>를 걸까요?
        </p>
      </h1>

      <p className={descriptionStyle}>
        선택사항입니다. 4자리에서 8자리 숫자를 적어주세요!
      </p>
    </PageTemplate>
  );
};

export default SelectPassword;
