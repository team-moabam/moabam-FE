import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 } from 'uuid';
import { AccordionContext } from '../hooks/useAccordion';
import useAccordionGroup from '../hooks/useAccordionGroup';

interface AccordionProps {
  className?: string;
  children: React.ReactNode;
}
const Accordion = ({ children, className = '' }: AccordionProps) => {
  const [id] = useState(v4());
  const { containerStyle, setOpenedId, openedId, singleOpen } =
    useAccordionGroup();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (!singleOpen) setIsOpen((prev) => !prev);
    setOpenedId(!isOpen ? id : '');
  };

  useEffect(() => {
    if (singleOpen) setIsOpen(openedId === id);
  }, [id, openedId, singleOpen]);

  return (
    <div
      className={twMerge(
        'w-full overflow-hidden p-1 ' + `${containerStyle}`,
        className
      )}
    >
      <AccordionContext.Provider value={{ isOpen, toggleOpen, id }}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
