import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RouteNames } from '@/core/routes';
import { useMoveRoute } from '@/core/hooks';
import { Icon } from '@/shared/Icon';

interface HeaderProps {
  prev?: RouteNames;
  title?: React.ReactNode;
  titleSize?: 'md' | 'xl';
  children?: React.ReactNode;
  className?: string;
}

const Header = ({
  prev,
  title,
  titleSize = 'xl',
  children,
  className = ''
}: HeaderProps) => {
  const moveTo = useMoveRoute();

  return (
    <div
      className={twMerge(
        'flex-shrink-0 dark:text-white flex h-16 w-full items-center justify-between px-2 font-IMHyemin-bold',
        className
      )}
    >
      {prev && (
        <div
          onClick={() => moveTo(prev)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center"
        >
          <Icon
            icon="BiChevronLeft"
            size="5xl"
          />
        </div>
      )}
      {title && (
        <div
          className={clsx('mx-3', {
            'text-xl': titleSize === 'xl',
            'text-base': titleSize === 'md'
          })}
        >
          {title}
        </div>
      )}
      <div className="mx-2 min-w-[1rem]">{children}</div>
    </div>
  );
};

export default Header;
