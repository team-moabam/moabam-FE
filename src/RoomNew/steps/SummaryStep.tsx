import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { formatHourString } from '@/TimePicker/utils/hour';
import { BIRD } from '@/RoomForm/constants/literals';
import { headingStyle, descriptionStyle } from '../constants/styles';
import { Inputs } from '../hooks/useRoomForm';
import { Icon, iconMap } from '@/shared/Icon';

interface Info {
  icon: keyof typeof iconMap;
  text: string;
  appendText?: string;
}

const SummaryStep = () => {
  const { getValues } = useFormContext<Inputs>();

  const routines = getValues('routines');

  const infos: Info[] = [
    {
      icon: 'PiBirdFill',
      text: BIRD[getValues('type')].name
    },
    {
      icon: 'RiTimerLine',
      text: formatHourString(getValues('certifyTime') % 24)
    },
    {
      icon: 'MdTitle',
      text: getValues('title')
    },
    {
      icon: 'RiFlowChart',
      text: `${routines[0].value}`,
      appendText: ` 등 ${routines.length}개`
    },
    {
      icon: 'FaUser',
      text: getValues('userCount') + '인'
    },
    {
      icon: 'AiOutlineLock',
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
            className="flex"
            key={i}
          >
            <div className="mr-6 flex shrink-0 flex-wrap items-start">
              <Icon
                icon={info.icon}
                className="mt-1"
              />
            </div>

            <p className="truncate">{info.text}</p>
            {info.appendText && (
              <p className="ml-1 shrink-0">{info.appendText}</p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SummaryStep;
