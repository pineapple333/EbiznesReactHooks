type Dispatch<A> = (value: A) => void;

export interface IProduct {
  id: number;
  name: string;
  description: string;
  category: number;
}

export interface IDevieryMethod {
  id: number;
  name: string;
}

export interface IOrder {
  id: number;
  product: IProduct;
  deliveryMethod: IDevieryMethod;
}

export type IShopContextState = {
  products: IProduct[];
  readingList: IProduct[];
  orders: IOrder[];
}