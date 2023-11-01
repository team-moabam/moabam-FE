import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import useAccordion from '../hooks/useAccordion';
import useAccordionGroup from '../hooks/useAccordionGroup';
import { Icon } from '@/shared/Icon';

export interface AccordionHeaderProps {
  children: React.ReactNode;
  buttonColored?: boolean;
  className?: string;
}

const AccordionHeader = ({
  children,
  buttonColored = false,
  className
}: AccordionHeaderProps) => {
  const { isOpen, toggleOpen } = useAccordion();
  const { headerStyle } = useAccordionGroup();

  return (
    <motion.div
      className={
        'flex justify-between items-center ' +
        `${headerStyle} ` +
        `${className ? className : ''}`
      }
    >
      <div>{children}</div>
      <div
        onClick={toggleOpen}
        className={clsx('ml-3 cursor-pointer duration-300 ease-in', {
          'rotate-180': isOpen,
          'text-light-point dark:text-dark-point': buttonColored && isOpen,
          'text-black dark:text-white': !buttonColored && isOpen,
          'text-dark-gray': !isOpen
        })}
      >
        <Icon
          icon="BiChevronUpCircle"
          size="2xl"
        />
      </div>
    </motion.div>
  );
};

export default AccordionHeader;
