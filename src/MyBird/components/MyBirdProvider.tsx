import { useState } from 'react';
import { SelectItem, Item } from '@/core/types';
import { MyBirdContext } from '../contexts/myBirdContext';

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
