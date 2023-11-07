export interface BirdItemType {
  id: string;
  type: 'MORNING' | 'NIGHT';
  category: string;
  name: string;
  image: string;
  level: number;
  bugPrice: number;
  goldenBugPrice: number;
}

export interface BirdItemsType {
  MORNING: {
    purchasedItems: BirdItemType[];
    notPurchasedItems: BirdItemType[];
  };
  NIGHT: {
    purchasedItems: BirdItemType[];
    notPurchasedItems: BirdItemType[];
  };
}

export interface Wallet {
  morningBug: number;
  nightBug: number;
  goldenBug: number;
}
