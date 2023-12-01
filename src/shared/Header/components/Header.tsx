import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PublicRouteNames, PrivateRouteNames } from '@/core/routes';
import { useMoveRoute } from '@/core/hooks';
import { Icon } from '@/shared/Icon';

interface HeaderProps {
  prev?: PublicRouteNames | PrivateRouteNames | -1;
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
  const navigate = useNavigate();

  const goPrev = () => {
    if (!prev) return;

    if (prev === -1) {
      if (history.state.idx === 0) {
        return navigate('/');
      } else {
        return navigate(-1);
      }
    }

    moveTo(prev);
  };

  return (
    <div
      className={twMerge(
        'flex-shrink-0 dark:text-white flex h-16 w-full items-center justify-between px-2 font-IMHyemin-bold',
        className
      )}
    >
      {prev && (
        <div
          onClick={() => goPrev()}
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
