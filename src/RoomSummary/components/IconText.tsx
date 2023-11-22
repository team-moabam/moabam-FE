import { iconMap } from '@/shared/Icon/constants/icons';
import { Icon } from '@/shared/Icon';

interface IconTextProps {
  icon: keyof typeof iconMap;
  content: React.ReactNode;
}

const IconText = ({ icon, content }: IconTextProps) => {
  return (
    <div className="mr-4 flex items-center">
      <Icon
        icon={icon}
        className="mr-1 text-base"
      />
      <div>{content}</div>
    </div>
  );
};

export default IconText;
