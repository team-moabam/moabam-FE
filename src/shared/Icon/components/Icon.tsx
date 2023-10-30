import { IconBaseProps } from 'react-icons';
import { iconMap } from '../constants/icons';

interface IconProps extends IconBaseProps {
  icon: keyof typeof iconMap;
}

const Icon = ({ icon, ...props }: IconProps) => {
  const SelectedIcon = iconMap[icon];

  return <SelectedIcon {...props} />;
};

export default Icon;
