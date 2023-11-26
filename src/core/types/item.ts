export interface Item {
  id: number;
  type: 'MORNING' | 'NIGHT';
  category: string;
  name: string;
  image: string;
  level: number;
  bugPrice: number;
  goldenBugPrice: number;
}

export interface Items {
  defaultItemId: number;
  purchasedItems: Item[];
  notPurchasedItems: Item[];
}

export interface SelectItem {
  MORNING: Item | null;
  NIGHT: Item | null;
}
