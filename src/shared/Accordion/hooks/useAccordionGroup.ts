import { useContext, createContext } from 'react';

export const AccordionGroupContext = createContext({
  containerStyle: '',
  headerStyle: '',
  bodyStyle: '',
  singleOpen: false,
  openedId: '',
  buttonColored: false,
  setOpenedId: (id: string) => {
    id;
  }
});

const useAccordionGroup = () => {
  return useContext(AccordionGroupContext);
};

export default useAccordionGroup;
