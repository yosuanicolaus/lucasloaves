import { useCart } from "../cart";

export function OrderPage() {
  const { products, calculateOrders } = useCart();
  return (
    <div className="flex-grow">
      <div>Order page</div>
      <div>{JSON.stringify(calculateOrders())}</div>
    </div>
  );
}
