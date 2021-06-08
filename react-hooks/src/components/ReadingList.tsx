import React, {useContext} from "react";
import {IProduct} from "../interface";
import ShopContext from "../contexts/ShopContext";
import useReadingList from "../hooks/useReadingList";

export interface ReadingListProps extends React.ReactHTML {}

export const ReadingList = (props: ReadingListProps) => {
  const { products } = useContext(ShopContext)
  const { readingList, addProduct, removeProduct } = useReadingList();

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
          {readingList.map((product: IProduct) => (<li>
            {product.name}
            <button onClick={() => removeProduct(product.id)}>remove product</button>
          </li>))
          }
        </ul>
      </div>
    </div>

  )
}
