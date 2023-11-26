import { createContext } from 'use-context-selector';
import { SelectItem, Item } from '@/core/types';

interface MyBirdContextType {
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
