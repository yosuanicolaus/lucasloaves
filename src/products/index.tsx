import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { useCart } from "../cart";
import { productsQuery } from "../firebase";
import { Product } from "../types";

export function Products() {
  const [data, loading] = useCollectionDataOnce(productsQuery);
  const products = data as Product[];
  const { addProduct } = useCart();

  return (
    <div className="flex-grow p-5">
      {loading && <div className="text-center">Loading products data...</div>}

      {products &&
        products.map((product) => (
          <div key={product.name} className="text-left flex border p-3 mb-3">
            <div className="flex-grow">
              <div className="font-bold">{product.name}</div>
              <div>{product.description}</div>
            </div>
            <div className="w-36 text-right">
              <div className="font-bold italic">${product.price}</div>
              <button
                className="bg-blue-400 rounded p-1"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
