import {useState} from "react";
import {IProduct} from "../interface";

function useReadingList() {
  const [readingList, setReadingList] = useState<IProduct[]>([]);

  function addProduct(product: IProduct) {
    setReadingList([
      ...readingList,
      product
    ])
  }

  function removeProduct(id: number) {
    const filteredProducts = readingList.filter(product => product.id !== id)

    setReadingList([...filteredProducts])
  }

  return {
  readingList,
  addProduct,
  removeProduct,
  }
}

export default useReadingList;
