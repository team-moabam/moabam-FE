import React from 'react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import useAccordion from '../hooks/useAccordion';
import { Icon } from '@/shared/Icon';

export interface AccordionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionHeader = ({ children, className }: AccordionHeaderProps) => {
  const { isOpen, toggleOpen } = useAccordion();
  return (
    <motion.div
      className={
        'flex justify-between items-center' + `${className ? className : ''}`
      }
    >
      <div>{children}</div>
      <div
        onClick={toggleOpen}
        className={clsx('cursor-pointer duration-300 ease-in', {
          'rotate-180': isOpen
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
