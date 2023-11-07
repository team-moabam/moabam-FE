import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Icon } from '@/shared/Icon';

interface HeaderProps {
  prev?: string;
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
  return (
    <div
      className={twMerge(
        'flex-shrink-0 dark:text-white flex h-16 w-full items-center justify-between px-2 font-IMHyemin-bold ',
        className
      )}
    >
      {prev && (
        <Link
          to={prev}
          className="flex h-12 w-12 items-center justify-center"
        >
          <Icon
            icon="BiChevronLeft"
            size="5xl"
          />
        </Link>
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
