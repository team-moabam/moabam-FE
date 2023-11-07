import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AccordionContext } from '../hooks/useAccordion';
import useAccordionGroup from '../hooks/useAccordionGroup';

interface AccordionProps {
  className?: string;
  children: React.ReactNode;
}

const Accordion = ({ children, className = '' }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  const { containerStyle } = useAccordionGroup();

  return (
    <div
      className={twMerge(
        'w-full overflow-hidden p-1 ' + `${containerStyle}`,
        className
      )}
    >
      <AccordionContext.Provider value={{ isOpen, toggleOpen }}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
