import { BirdItemType } from './birdItem';

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
