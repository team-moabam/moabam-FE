import { IconBaseProps } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import { iconMap } from '../constants/icons';

const sizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl'
};

interface IconProps extends Omit<IconBaseProps, 'size'> {
  icon: keyof typeof iconMap;
  size?: keyof typeof sizeMap;
}

const Icon = ({ icon, size = 'md', className = '', ...props }: IconProps) => {
  const SelectedIcon = iconMap[icon];

  return (
    <SelectedIcon
      className={twMerge(sizeMap[size], className)}
      {...props}
    />
  );
};

export default Icon;
