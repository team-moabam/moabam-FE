import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { Icon } from '@/shared/Icon';

interface HeaderProps {
  prev?: string;
  title?: string;
  titleSize?: 'md' | 'xl';
  children?: React.ReactNode;
  className?: string;
}

const Header = ({
  prev,
  title,
  titleSize,
  children,
  className
}: HeaderProps) => {
  return (
    <div
      className={
        'sticky left-0 top-0 flex h-16 w-full items-center justify-between px-2 font-IMHyemin-bold ' +
        `${className ? className : ''}`
      }
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
          className={clsx({
            'text-xl': titleSize === 'xl',
            'text-base': titleSize === 'md'
          })}
        >
          {title}
        </div>
      )}
      <div className="min-w-[3rem]">{children}</div>
    </div>
  );
};

export default Header;
