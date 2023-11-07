import React from 'react';
import { AccordionGroupContext } from '../hooks/useAccordionGroup';

interface AccordionGroupProps {
  headerStyle?: string;
  bodyStyle?: string;
  containerStyle?: string;
  buttonColored?: boolean;
  children: React.ReactNode;
}

const AccordionGroup = ({
  containerStyle = '',
  headerStyle = '',
  bodyStyle = '',
  buttonColored = false,
  children
}: AccordionGroupProps) => {
  return (
    <AccordionGroupContext.Provider
      value={{ containerStyle, headerStyle, bodyStyle, buttonColored }}
    >
      {children}
    </AccordionGroupContext.Provider>
  );
};

export default AccordionGroup;
