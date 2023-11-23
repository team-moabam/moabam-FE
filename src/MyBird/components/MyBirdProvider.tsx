import { useState } from 'react';
import { MyBirdContext } from '../contexts/myBirdContext';
import { SelectItemType } from '../types/selectItem';
import { ItemType } from '../types/item';

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
