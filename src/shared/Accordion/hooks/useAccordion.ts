import { useContext, createContext } from 'react';

export const AccordionContext = createContext({
  isOpen: false,
  toggleOpen: () => {}
});

const useAccordion = () => {
  return useContext(AccordionContext);
};

export default useAccordion;
