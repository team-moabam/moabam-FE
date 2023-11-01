import React from 'react';
import { AccordionGroupContext } from '../hooks/useAccordionGroup';

interface AccordionGroupProps {
  headerStyle?: string;
  bodyStyle?: string;
  buttonColored?: boolean;
  children: React.ReactNode;
}

const AccordionGroup = ({
  headerStyle = '',
  bodyStyle = '',
  buttonColored = false,
  children
}: AccordionGroupProps) => {
  return (
    <AccordionGroupContext.Provider
      value={{ headerStyle, bodyStyle, buttonColored }}
    >
      {children}
    </AccordionGroupContext.Provider>
  );
};

export default AccordionGroup;
