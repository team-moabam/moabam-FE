import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { Icon } from '@/shared/Icon';
import useAccordion from '../hooks/useAccordion';
import useAccordionGroup from '../hooks/useAccordionGroup';

export interface AccordionHeaderProps {
  children: React.ReactNode;
  buttonColored?: boolean;
  className?: string;
  headerToggle?: boolean;
}

const AccordionHeader = ({
  children,
  buttonColored = false,
  headerToggle,
  className = ''
}: AccordionHeaderProps) => {
  const { isOpen, toggleOpen } = useAccordion();
  const { headerStyle, buttonColored: headerButtonColored } =
    useAccordionGroup();

  return (
    <motion.div
      className={twMerge(
        clsx('flex items-center justify-between', {
          'cursor-pointer': headerToggle
        }),
        headerStyle,
        className
      )}
      onClick={headerToggle ? toggleOpen : () => {}}
    >
      <div className="flex-1">{children}</div>
      <div
        onClick={headerToggle ? () => {} : toggleOpen}
        className={clsx('ml-3 duration-300 ease-in', {
          'rotate-180': isOpen,
          'text-light-point dark:text-dark-point':
            (buttonColored || headerButtonColored) && isOpen,
          'text-black dark:text-white':
            !(buttonColored || headerButtonColored) && isOpen,
          'text-dark-gray': !isOpen,
          'cursor-pointer': !headerToggle
        })}
      >
        <Icon
          icon="BiChevronDownCircle"
          size="3xl"
        />
      </div>
    </motion.div>
  );
};

export default AccordionHeader;
