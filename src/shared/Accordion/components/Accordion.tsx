import React, { useState } from 'react';
import { AccordionContext } from '../hooks/useAccordion';

interface AccordionProps {
  children: React.ReactNode;
}

const Accordion = ({ children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <AccordionContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </AccordionContext.Provider>
  );
};

export default Accordion;
