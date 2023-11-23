import { useState } from 'react';
import { SelectItemType } from '@/core/types';
import { ItemType } from '@/core/types';
import { MyBirdContext } from '../contexts/myBirdContext';

interface MyBirdProviderProps {
  children: React.ReactNode;
}

const MyBirdProvider = ({ children }: MyBirdProviderProps) => {
  const [selectItem, setSelectItem] = useState<SelectItemType>({
    MORNING: null,
    NIGHT: null
  });
  const [productItem, setProductItem] = useState<ItemType | null>(null);

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
