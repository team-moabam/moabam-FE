import { useState } from 'react';
import { MyBirdContext } from '@/contexts/myBirdContext';

interface MyBirdProviderProps {
  children: React.ReactNode;
}

const MyBirdProvider = ({ children }: MyBirdProviderProps) => {
  const level = 3;
  const [selectItem, setSelectItem] = useState({
    MORNING: undefined,
    NIGHT: undefined
  });
  const [productItem, setProductItem] = useState();
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
