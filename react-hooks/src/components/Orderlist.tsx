import React, {useContext} from "react";
import {IProduct} from "../interface";
import ShopContext from "../contexts/ShopContext";
import useOrders from "../hooks/useOrders";

export interface BasketProps extends React.ReactHTML {}

export const Basket = (props: BasketProps) => {
  const { products, orders } = useContext(ShopContext)
  const { addOrder, removeOrder } = useOrders();

  return (
    <div>
      <div className="orders_add">
        <ul>
          {orders.map((order: IOrders) => (<li>
            {order.product.name} {order.deliveryMethod.name}
            <button onClick={() => addOrder(order)}>add order</button>
          </li>))}
        </ul>
      </div>

      <div className="orders_remove">
        <ul>
        {orders.map((order: IOrders) => (<li>
            {order.product.name} {order.deliveryMethod.name}
            <button onClick={() => removeOrder(order)}>remove order</button>
          </li>))}
        </ul>
      </div>
    </div>

  )
}
