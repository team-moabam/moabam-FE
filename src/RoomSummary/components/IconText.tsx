import { iconMap } from '@/shared/Icon/constants/icons';
import { Icon } from '@/shared/Icon';

interface IconTextProps {
  icon: keyof typeof iconMap;
  text: string;
}

const IconText = ({ icon, text }: IconTextProps) => {
  return (
    <div className="flex items-center">
      <Icon
        icon={icon}
        className="mr-1 text-base"
      />
      <div>{text}</div>
    </div>
  );
};

export default IconText;
