import { useContext, createContext } from 'react';

export const AccordionGroupContext = createContext({
  headerStyle: '',
  bodyStyle: '',
  buttonColored: false
});

const useAccordionGroup = () => {
  return useContext(AccordionGroupContext);
};

export default useAccordionGroup;
