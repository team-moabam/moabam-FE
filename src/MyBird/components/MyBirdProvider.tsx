import { useState } from 'react';
import { MyBirdContext } from '../contexts/myBirdContext';
import { SelectItemType } from '../types/selectItem';
import { ItemType } from '../types/item';
interface MyBirdProviderProps {
  children: React.ReactNode;
}

const MyBirdProvider = ({ children }: MyBirdProviderProps) => {
  const level = 3; // 여기서 유저, 지갑 데이터 받긴 해야함
  const [selectItem, setSelectItem] = useState<SelectItemType>({
    MORNING: undefined,
    NIGHT: undefined
  });
  const [productItem, setProductItem] = useState<ItemType>();
  const [bugs, setBugs] = useState({
    morningBug: 4,
    nightBug: 300,
    goldenBug: 100
  });

  return (
    <MyBirdContext.Provider
      value={{
        level,
        selectItem,
        setSelectItem,
        productItem,
        setProductItem,
        bugs,
        setBugs
      }}
    >
      {children}
    </MyBirdContext.Provider>
  );
};

export default MyBirdProvider;
