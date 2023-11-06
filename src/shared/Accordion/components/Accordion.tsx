import React, { useState } from 'react';
import { AccordionContext } from '../hooks/useAccordion';

interface AccordionProps {
  className?: string;
  children: React.ReactNode;
}

const Accordion = ({ children, className = '' }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className={'w-full overflow-hidden p-1 ' + className}>
      <AccordionContext.Provider value={{ isOpen, toggleOpen }}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
