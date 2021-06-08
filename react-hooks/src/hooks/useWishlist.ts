import {useState} from "react";
import {IProduct} from "../interface";

function useWishlist() {
  const [ wishlist, setWishlist ] = useState<IProduct[]>([]);

  function addProduct(product: IProduct) {
    setWishlist([
      ...wishlist,
      product
    ])
  }

  function removeProduct(id: number) {
    const filteredProducts = wishlist.filter(product => product.id !== id)

    setWishlist([...filteredProducts])
  }

  return {
    wishlist,
    addProduct,
    removeProduct,
  }
}

export default useWishlist;
