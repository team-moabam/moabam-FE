import React from 'react';
import useAccordion from '../hooks/useAccordion';
import { Icon } from '@/shared/Icon';

export interface AccordionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionHeader = ({ children, className }: AccordionHeaderProps) => {
  const { toggleOpen } = useAccordion();
  return (
    <div className={'flex' + `${className ? className : ''}`}>
      <div>{children}</div>
      <div onClick={toggleOpen}>
        <Icon icon="BiChevronUpCircle" />
      </div>
    </div>
  );
};

export default AccordionHeader;
