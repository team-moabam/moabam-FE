import { ComponentProps } from 'react';
import clsx from 'clsx';
import { Icon } from '@/shared/Icon';

interface IconButtonProps {
  icon: ComponentProps<typeof Icon>['icon'];
  onClick?: VoidFunction;
}

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        'bg-white text-light-point hover:bg-light-main hover:text-light-point-hover dark:text-dark-point dark:hover:text-dark-point-hover',
        'cursor-pointer rounded-2xl p-2'
      )}
      onClick={onClick}
    >
      <Icon
        icon={icon}
        size="lg"
      />
    </div>
  );
};

export default IconButton;
