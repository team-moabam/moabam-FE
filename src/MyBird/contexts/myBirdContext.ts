import { createContext } from 'use-context-selector';
import { SelectItemType } from '../types/selectItem';
import { ItemType } from '../types/item';
import { BugsType } from '../types/bugs';

interface MyBirdContextType {
  level: number;
  selectItem: SelectItemType;
  setSelectItem: React.Dispatch<React.SetStateAction<SelectItemType>>;
  productItem: ItemType | undefined;
  setProductItem: React.Dispatch<React.SetStateAction<ItemType | undefined>>;
  bugs: BugsType;
  setBugs: React.Dispatch<React.SetStateAction<BugsType>>;
}

export const MyBirdContext = createContext<MyBirdContextType>({
  level: 0,
  selectItem: {
    MORNING: undefined,
    NIGHT: undefined
  },
  setSelectItem: () => {},
  productItem: undefined,
  setProductItem: () => {},
  bugs: {
    morningBug: 4,
    nightBug: 300,
    goldenBug: 100
  },
  setBugs: () => {}
});
