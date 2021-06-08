import {useState} from "react";
import {IProduct} from "../interface";

function useUserLibrary() {
  const [userLibrary, setUserLibrary] = useState<IProduct[]>([]);

  function addProduct(product: IProduct) {
    setUserLibrary([
      ...userLibrary,
      product
    ])
  }

  function removeProduct(id: number) {
    const filteredProducts = userLibrary.filter(product => product.id !== id)

    setUserLibrary([...filteredProducts])
  }

  return {
    userLibrary,
    addProduct,
    removeProduct,
  }
}

export default useUserLibrary;
