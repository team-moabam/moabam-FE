import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { formatHourString } from '@/TimePicker/utils/hour';
import { headingStyle, descriptionStyle } from '../constants/styles';
import { Inputs } from '../constants/form';
import { BIRD } from '../constants/literals';
import { Icon, iconMap } from '@/shared/Icon';

interface Info {
  icon: keyof typeof iconMap;
  title: string;
  text: string;
}

const SummaryStep = () => {
  const { getValues } = useFormContext<Inputs>();

  const routines = getValues('routines');

  const infos: Info[] = [
    {
      icon: 'PiBirdFill',
      title: '새',
      text: BIRD[getValues('type')].name
    },
    {
      icon: 'RiTimerLine',
      title: '인증시간',
      text: formatHourString(getValues('certifyTime') % 24)
    },
    {
      icon: 'MdTitle',
      title: '방 제목',
      text: getValues('title')
    },
    {
      icon: 'RiFlowChart',
      title: '루틴',
      text: `${routines[0].value} 등 ${routines.length}개`
    },
    {
      icon: 'FaUser',
      title: '인원수',
      text: getValues('userCount') + '인'
    },
    {
      icon: 'AiOutlineLock',
      title: '공개 여부',
      text: getValues('password') ? '비공개' : '공개'
    }
  ];

  return (
    <>
      <h1 className={headingStyle}>
        <strong>준비 끝 !</strong>
      </h1>

      <p className={clsx(descriptionStyle, 'mb-10')}>
        책임감을 가지고 루틴을 지켜주세요!
      </p>

      <ul className="flex flex-col gap-4">
        {infos.map((info, i) => (
          <li
            className="flex gap-2"
            key={i}
          >
            <div className="flex shrink-0 flex-wrap items-start gap-1">
              <Icon
                icon={info.icon}
                className="mt-1"
              />
              <b>{info.title}: </b>
            </div>

            <p className="break-all">{info.text}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SummaryStep;
