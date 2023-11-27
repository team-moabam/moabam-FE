export interface ProductBug {
  id: string;
  type: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ProductBugs {
  products: ProductBug[];
}
