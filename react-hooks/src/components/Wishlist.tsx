import React, {useContext} from "react";
import {IProduct} from "../interface";
import ShopContext from "../contexts/ShopContext";
import useWishlist from "../hooks/useWishlist";

export interface WishlistProps extends React.ReactHTML {}

export const Wishlist = (props: WishlistProps) => {
  const { products } = useContext(ShopContext)
  const { wishlist, addProduct, removeProduct } = useWishlist();

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
          {wishlist.map((product: IProduct) => (<li>
            {product.name}
            <button onClick={() => removeProduct(product.id)}>remove product</button>
          </li>))}
        </ul>
      </div>
    </div>

  )
}
