export interface ItemType {
  id: number;
  type: 'MORNING' | 'NIGHT';
  category: string;
  name: string;
  image: string;
  level: number;
  bugPrice: number;
  goldenBugPrice: number;
}

export interface ItemsType {
  defaultItemId: number;
  purchasedItems: ItemType[];
  notPurchasedItems: ItemType[];
}

export interface SelectItemType {
  MORNING: ItemType | undefined;
  NIGHT: ItemType | undefined;
}

export interface BugsType {
  morningBug: number;
  nightBug: number;
  goldenBug: number;
}
