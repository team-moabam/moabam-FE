import { Icon } from '@/shared/Icon';
import { Input } from '@/shared/Input';

const routines = ['헬스', '요가', '달리기', ''];
const iconStyle =
  'cursor-pointer text-light-point transition-all hover:text-light-point-hover';
const headingStyle = 'mb-6';
const detailSectionStyle = 'mb-8 text-xl leading-[2rem]';

const RoutineStep = () => {
  return (
    <>
      <section className={detailSectionStyle}>
        <h2 className={headingStyle}>
          같이 <b>어떤 루틴</b>을 해볼까요?
        </h2>
        <ul className="flex flex-col gap-4">
          {routines.map((item) => (
            <li
              className="relative flex"
              key={item}
            >
              <Input
                placeholder="루틴 이름"
                value={item}
              />
              <div className="absolute right-0 top-1/2 -mr-8 flex h-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-l-lg bg-dark-gray px-1 text-white transition-all hover:bg-gray-600">
                <Icon
                  icon="CgClose"
                  size="sm"
                />
              </div>
            </li>
          ))}
          <li className="flex flex-col items-center gap-3">
            <Icon
              icon="FaPlusCircle"
              size="3xl"
              className={iconStyle}
            />
            <div className="text-center text-xs">2 / 4</div>
          </li>
        </ul>
      </section>
      <section className={detailSectionStyle}>
        <h2 className={headingStyle}>
          <b>방 이름</b>을 지어주세요.
        </h2>
        <Input placeholder="짧고 명확하게!" />
      </section>
      <section className={detailSectionStyle}>
        <h2 className={headingStyle}>
          <b>최대 몇 명</b>의 친구들과
          <p>함께하고 싶으세요?</p>
        </h2>
        <div className="flex items-center justify-center gap-10">
          <Icon
            icon="FaMinusCircle"
            size="3xl"
            className={iconStyle}
          />
          <b>5명</b>
          <Icon
            icon="FaPlusCircle"
            size="3xl"
            className={iconStyle}
          />
        </div>
      </section>
    </>
  );
};

export default RoutineStep;
