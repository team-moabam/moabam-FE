import React, { useState } from 'react';
import { AccordionGroupContext } from '../hooks/useAccordionGroup';

interface AccordionGroupProps {
  headerStyle?: string;
  bodyStyle?: string;
  containerStyle?: string;
  buttonColored?: boolean;
  singleOpen?: boolean;
  children: React.ReactNode;
}

const AccordionGroup = ({
  containerStyle = '',
  headerStyle = '',
  bodyStyle = '',
  buttonColored = false,
  singleOpen = false,
  children
}: AccordionGroupProps) => {
  const [openedId, setOpenedId] = useState('');

  return (
    <AccordionGroupContext.Provider
      value={{
        containerStyle,
        headerStyle,
        bodyStyle,
        buttonColored,
        singleOpen,
        openedId,
        setOpenedId
      }}
    >
      {children}
    </AccordionGroupContext.Provider>
  );
};

export default AccordionGroup;
