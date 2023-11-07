import React from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';
import useAccordion from '../hooks/useAccordion';
import useAccordionGroup from '../hooks/useAccordionGroup';

interface AccordionBodyProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionBody = ({ children, className = '' }: AccordionBodyProps) => {
  const { isOpen } = useAccordion();
  const { bodyStyle } = useAccordionGroup();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.8, bounce: 0 }}
          className={twMerge('box-border h-auto ' + `${bodyStyle}`, className)}
        >
          <div>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccordionBody;
