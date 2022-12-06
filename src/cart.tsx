import { createContext, useContext, useState, PropsWithChildren } from "react";
import { Product } from "./types";

interface CartContextInterface {
  totalItem: number;
  products: Product[];
  totalPrice: number;
}

const CartContext = createContext({} as CartContextInterface);

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <CartContext.Provider
      value={{
        products,
        totalItem: products.length,
        totalPrice: products.reduce(
          (acc, currProduct) => acc + currProduct.price,
          0
        ),
      }}
    >
      <>{children}</>
    </CartContext.Provider>
  );
}
