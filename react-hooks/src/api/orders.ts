import { IOrder } from "../interface";

export const fetchOrders = async (): Promise<IOrder[]> => {
  const response = await fetch(`http://localhost:9000/orders`)
    .then(response => response.json())
  return response
}


export default fetchOrders