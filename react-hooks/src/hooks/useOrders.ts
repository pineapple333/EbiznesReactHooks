import {useState} from "react";
import {IOrder} from "../interface";

function useOrders() {
  const [orders, setOrders] = useState<IOrder[]>([]);

  function addOrder(order: IOrder) {
    setOrders([
      ...orders,
      order
    ])
  }

  function removeOrder(id: number) {
    const filteredOrders = orders.filter(order => order.id !== id)

    setOrders([...filteredOrders])
  }

  return {
    orders,
    addOrder,
    removeOrder,
  }
}

export default useOrders;
