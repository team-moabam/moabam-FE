import clsx from 'clsx';
import { headingStyle, descriptionStyle } from '../constants/styles';
import PageTemplate from '../templates/PageTemplate';
import { Icon, iconMap } from '@/shared/Icon';

interface Info {
  icon: keyof typeof iconMap;
  text: string;
}

const Summary = () => {
  const infos: Info[] = [
    {
      icon: 'PiBirdFill',
      text: '오목눈이'
    },
    {
      icon: 'RiTimerLine',
      text: '9:00'
    },
    {
      icon: 'MdTitle',
      text: '물 마셔서 꿀피부 되기'
    },
    {
      icon: 'RiFlowChart',
      text: '물마시기 외 1개'
    },
    {
      icon: 'FaUser',
      text: '5인'
    },
    {
      icon: 'AiOutlineLock',
      text: '비공개'
    }
  ];

  return (
    <PageTemplate>
      <h1 className={headingStyle}>
        <strong>준비 끝 !</strong>
      </h1>

      <p className={clsx(descriptionStyle, 'mb-10')}>
        책임감을 가지고 키워주세요!
      </p>

      <ul>
        {infos.map((info, i) => (
          <li
            className="flex items-center gap-2 leading-10"
            key={i}
          >
            <Icon icon={info.icon} />
            {info.text}
          </li>
        ))}
      </ul>
    </PageTemplate>
  );
};

export default Summary;
