import React from 'react';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import useAccordion from '../hooks/useAccordion';

interface AccordionBodyProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionBody = ({ children, className }: AccordionBodyProps) => {
  const { isOpen } = useAccordion();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ type: 'spring', duration: 0.7, bounce: 0 }}
          className={'overflow-hidden' + `${className ? className : ''}`}
        >
          <div>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccordionBody;
