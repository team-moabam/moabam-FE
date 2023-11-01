import PageTemplate from '../templates/PageTemplate';

const SelectTime = () => {
  return (
    <PageTemplate>
      <h1 className="text-3xl leading-[3rem]">
        <strong className="font-bold">언제 </strong>
        인증할까요?
      </h1>

      <p className="pt-2 text-base text-dark-gray">
        인증 시간은 선택한 시간 전후 10분이에요
      </p>

      {/* TODO: TimePicker 컴포넌트 */}
    </PageTemplate>
  );
};

export default SelectTime;
