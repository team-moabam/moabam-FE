import { formatHourString } from '@/TimePicker/utils/hour';
import { Input, InnerTextInput, PasswordInput } from '@/shared/Input';
import { TimePicker } from '@/TimePicker';
import { Icon } from '@/shared/Icon';

// 각각의 인풋과 라벨을 감싸는 영역의 스타일
const inputSectionStyle = 'mb-10 flex flex-col gap-2';

// 플러스(+), 마이너스(-) 버튼에 적용할 스타일
const iconButtonStyle =
  'cursor-pointer text-light-point transition-all hover:text-light-point-hover';

const RoomTab = () => {
  return (
    <>
      <section className={inputSectionStyle}>
        <label htmlFor="title">
          <b>방 이름</b>
        </label>
        <Input id="title" />
      </section>

      <section className={inputSectionStyle}>
        <label htmlFor="notice">
          <b>공지사항</b>
        </label>
        <Input id="notice" />
      </section>

      <section className={inputSectionStyle}>
        <label htmlFor="notice">
          <b>인증 시간</b>
        </label>
        <div className="flex w-full flex-col items-center gap-6">
          <div>{formatHourString(4)}</div>
          <TimePicker
            range={[4, 10]}
            initialTime={5}
          />
          <div>{formatHourString(10)}</div>
        </div>
      </section>

      <section className={inputSectionStyle}>
        <label>
          <b>루틴 목록</b>
        </label>
        <ul className="flex flex-col gap-4">
          <li className="w-full">
            <div className="relative w-full">
              <InnerTextInput
                wrapperStyle="w-full"
                textStyle="text-xs text-gray-400"
                text={'0 / 20'}
              />
            </div>
          </li>
          {Array.from({ length: 3 }).map(() => (
            <li className="w-full">
              <div className="relative w-full">
                <InnerTextInput
                  wrapperStyle="w-full"
                  textStyle="text-xs text-gray-400"
                  text={'0 / 20'}
                />
                <div className="absolute right-0 top-1/2 -mr-8 flex h-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-l-lg bg-dark-gray px-1 text-white transition-all hover:bg-gray-600">
                  <Icon
                    icon="CgClose"
                    size="sm"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={inputSectionStyle}>
        <label>
          <b>인원</b>
        </label>
        <div className="flex items-center justify-center gap-10">
          <Icon
            icon="FaMinusCircle"
            size="3xl"
            className={iconButtonStyle}
          />
          <b className="text-xl">5 명</b>
          <Icon
            icon="FaPlusCircle"
            size="3xl"
            className={iconButtonStyle}
          />
        </div>
      </section>

      <section className={inputSectionStyle}>
        <label htmlFor="password">
          <b>비밀번호</b>
        </label>
        <PasswordInput
          id="password"
          placeholder="비워두시면 공개방이 됩니다"
        />
      </section>

      <button className="btn btn-transition btn-light-point mb-5 w-full text-xl">
        적용
      </button>
    </>
  );
};

export default RoomTab;
