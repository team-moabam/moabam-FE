import { createContext } from 'use-context-selector';
import { SelectItemType } from '../types/selectItem';
import { ItemType } from '../types/item';

interface MyBirdContextType {
  selectItem: SelectItemType;
  setSelectItem: React.Dispatch<React.SetStateAction<SelectItemType>>;
  productItem: ItemType | null;
  setProductItem: React.Dispatch<React.SetStateAction<ItemType | null>>;
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
