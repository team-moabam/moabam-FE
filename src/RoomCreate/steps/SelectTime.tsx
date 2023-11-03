import { headingStyle, descriptionStyle } from '../constants/styles';
import { TimePicker } from '@/TimePicker';

const SelectTime = () => {
  return (
    <>
      <h1 className={headingStyle}>
        <strong>언제 </strong>
        인증할까요?
      </h1>

      <p className={descriptionStyle}>
        인증 시간은 선택한 시간 전후 10분이에요
      </p>

      <section className="mt-10 flex w-full flex-col items-center gap-6">
        <div>04 : 00</div>
        <TimePicker
          range={[4, 10]}
          initialTime={4}
        />
        <div>10 : 00</div>
      </section>
    </>
  );
};

export default SelectTime;
