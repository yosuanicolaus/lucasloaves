import { useCart } from "../cart";

export function OrderPage() {
  const { products } = useCart();
  return (
    <div className="flex-grow">
      <div>Order page</div>
      <div>{JSON.stringify(products)}</div>
    </div>
  );
}
