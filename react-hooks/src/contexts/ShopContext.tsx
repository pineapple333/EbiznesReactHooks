import React, { useEffect, useState } from "react";
import { IProduct, IShopContextState } from "../interface";
import { fetchProducts } from "../api/products"
import { fetchOrders } from "../api/orders";

const defaultValue: IShopContextState = {
  products: [],
  readingList: [],
  orders: []
}

export const ShopContext = React.createContext(defaultValue);

export const ShopContextProvider: React.FC = ({ children }) => {

  const [products, setProducts] = useState<IProduct[]>([]);

  const [orders, setOrders] = useState<IOrder[]>([]);

  const providerValue: IShopContextState = {
    products,
    orders
  }

  useEffect(() => {

    fetchProducts()
      .then((products) => {
        // console.log(products)
        setProducts(products)
      })

    fetchOrders()
    .then((orders) => {
      // console.log(orders)
      setOrders(orders)
    })

  }, []);

  return (
    <ShopContext.Provider value={providerValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContext;
