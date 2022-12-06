import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { useCart } from "../cart";
import { productsQuery } from "../firebase";
import { Product } from "../types";

export function FeaturedProducts() {
  const [data, loading, error] = useCollectionDataOnce(productsQuery);
  const products = data as Product[];
  const featured = products ? products.slice(0, 3) : [];
  const { addProduct } = useCart();

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="border border-black m-5 text-center p-5">
      <h1 className="font-bold text-lg py-4">Featured Products</h1>
      {loading ? (
        <div>loading product data...</div>
      ) : (
        <>
          {featured.map((product) => (
            <div key={product.name} className="text-left flex border p-3 mb-3">
              <div className="flex-grow">
                <div className="font-bold">{product.name}</div>
                <div>{product.description}</div>
              </div>
              <div className="w-36 text-right">
                <div>${product.price}</div>
                <button
                  className="bg-blue-400 rounded p-1"
                  onClick={() => addProduct(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
