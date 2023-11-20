import React from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';
import useAccordion from '../hooks/useAccordion';
import useAccordionGroup from '../hooks/useAccordionGroup';

interface AccordionBodyProps {
  children: React.ReactNode;
  className?: string;
}

const animation = {
  open: {
    height: 'auto',
    opacity: 1
  },
  collapse: {
    height: 0,
    opacity: 0
  }
};

const childrenAnimation = {
  open: { opacity: 1 },
  collapse: { opacity: 0 }
};

const AccordionBody = ({ children, className = '' }: AccordionBodyProps) => {
  const { isOpen } = useAccordion();
  const { bodyStyle } = useAccordionGroup();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="collapse"
          animate="open"
          exit="collapse"
          variants={animation}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={twMerge('box-border h-auto ' + `${bodyStyle}`, className)}
        >
          <motion.div variants={childrenAnimation}>{children}</motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccordionBody;
