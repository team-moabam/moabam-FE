import { createContext } from 'use-context-selector';

export const MyBirdContext = createContext({
  level: 0,
  selectItem: {},
  setSelectItem: () => {},
  productItem: {},
  setProductItem: () => {},
  bugs: {},
  setBugs: () => {}
});
