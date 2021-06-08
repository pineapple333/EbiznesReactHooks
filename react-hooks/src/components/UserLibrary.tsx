import React, {useContext} from "react";
import {IProduct} from "../interface";
import ShopContext from "../contexts/ShopContext";
import useUserLibrary from "../hooks/useUserLibrary";

export interface ReadingListProps extends React.ReactHTML {}

export const UserLibrary = (props: UserLibraryProps) => {
  const { products } = useContext(ShopContext)
  const { userLibrary, addProduct, removeProduct } = useUserLibrary();

  return (
    <div>
      <div className="products">
        <ul>
          {products.map((product: IProduct) => (<li>
            {product.name}
            <button onClick={() => addProduct(product)}>add product</button>
          </li>))}
        </ul>
      </div>

      <div className="basket">
        <ul>
          {basket.map((product: IProduct) => (<li>
            {product.name}
            <button onClick={() => removeProduct(product.id)}>remove product</button>
          </li>))
          }
        </ul>
      </div>
    </div>

  )
}
