import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { productsQuery } from "../firebase";

export function FeaturedProducts() {
  const [products, loading, error] = useCollectionDataOnce(productsQuery);

  return (
    <div className="border border-black m-5 text-center">
      <h1 className="font-bold text-lg">Featured Products</h1>
      {loading && <div>loading product data...</div>}
      {error && <div>Error: {error.message}</div>}
      <div>{JSON.stringify(products)}</div>
    </div>
  );
}
