import React from 'react';
import { AccordionGroupContext } from '../hooks/useAccordionGroup';

interface AccordionGroupProps {
  headerStyle?: string;
  bodyStyle?: string;
  children: React.ReactNode;
}

const AccordionGroup = ({
  headerStyle = '',
  bodyStyle = '',
  children
}: AccordionGroupProps) => {
  return (
    <AccordionGroupContext.Provider value={{ headerStyle, bodyStyle }}>
      {children}
    </AccordionGroupContext.Provider>
  );
};

export default AccordionGroup;
