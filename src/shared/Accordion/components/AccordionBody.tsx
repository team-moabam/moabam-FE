import React from 'react';
import useAccordion from '../hooks/useAccordion';

interface AccordionBodyProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionBody = ({ children, className }: AccordionBodyProps) => {
  const { isOpen } = useAccordion();
  return <div className={className ? className : ''}>{isOpen && children}</div>;
};

export default AccordionBody;
