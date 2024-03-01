import React from 'react';
import { motion } from 'framer-motion';

interface StepTemplateProps {
  children: React.ReactNode;
}

const StepTemplate = ({ children }: StepTemplateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default StepTemplate;
