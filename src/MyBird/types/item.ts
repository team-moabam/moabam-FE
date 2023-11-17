export interface ItemType {
  id: string;
  type: 'MORNING' | 'NIGHT';
  category: string;
  name: string;
  image: string;
  level: number;
  bugPrice: number;
  goldenBugPrice: number;
}
