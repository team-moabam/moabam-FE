import { useState, createContext } from 'react';
import { SelectItem, Item } from '@/core/types';

export interface MyBirdContextType {
  selectItem: SelectItem;
  setSelectItem: React.Dispatch<React.SetStateAction<SelectItem>>;
  productItem: Item | null;
  setProductItem: React.Dispatch<React.SetStateAction<Item | null>>;
}
export const MyBirdContext = createContext<MyBirdContextType>({
  selectItem: {
    MORNING: null,
    NIGHT: null
  },
  setSelectItem: () => {},
  productItem: null,
  setProductItem: () => {}
});

interface MyBirdProviderProps {
  children: React.ReactNode;
}

const MyBirdProvider = ({ children }: MyBirdProviderProps) => {
  const [selectItem, setSelectItem] = useState<SelectItem>({
    MORNING: null,
    NIGHT: null
  });
  const [productItem, setProductItem] = useState<Item | null>(null);

  return (
    <MyBirdContext.Provider
      value={{
        selectItem,
        setSelectItem,
        productItem,
        setProductItem
      }}
    >
      {children}
    </MyBirdContext.Provider>
  );
};

export default MyBirdProvider;
