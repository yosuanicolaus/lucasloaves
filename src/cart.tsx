import { createContext, useContext, useState, PropsWithChildren } from "react";
import { Product, ProductOrder } from "./types";

interface CartContextInterface {
  totalItem: number;
  products: Product[];
  totalPrice: number;
  addProduct: (product: Product) => void;
  calculateOrders: () => ProductOrder[];
}

const CartContext = createContext({} as CartContextInterface);

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const calculateOrders = () => {
    const seenProduct = new Set();
    const orders: ProductOrder[] = [];

    products.forEach((product) => {
      if (seenProduct.has(product.name)) {
        // product exist in order already
        const idx = orders.findIndex((order) => order.name === product.name);
        orders[idx].quantity++;
        orders[idx].orderPrice = orders[idx].price * orders[idx].quantity;
      } else {
        // new product
        seenProduct.add(product.name);
        orders.push({
          name: product.name,
          price: product.price,
          quantity: 1,
          orderPrice: product.price,
        });
      }
    });

    return orders;
  };

  return (
    <CartContext.Provider
      value={{
        products,
        totalItem: products.length,
        totalPrice: products.reduce((acc, curr) => acc + curr.price, 0),
        addProduct,
        calculateOrders,
      }}
    >
      <>{children}</>
    </CartContext.Provider>
  );
}
