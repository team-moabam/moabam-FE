import PageTemplate from '../templates/PageTemplate';
import { headingStyle, descriptionStyle } from '../constants/styles';

const SelectTime = () => {
  return (
    <PageTemplate>
      <h1 className={headingStyle}>
        <strong>언제 </strong>
        인증할까요?
      </h1>

      <p className={descriptionStyle}>
        인증 시간은 선택한 시간 전후 10분이에요
      </p>

      {/* TODO: TimePicker 컴포넌트 */}
    </PageTemplate>
  );
};

export default SelectTime;
