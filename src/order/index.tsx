import { useCart } from "../cart";

export function OrderPage() {
  const { calculateOrders, totalPrice } = useCart();
  const productOrders = calculateOrders();

  return (
    <div className="flex-grow p-5 text-center">
      <table className="border p-5 table-auto min-w-full">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {productOrders.map((productOrder) => (
            <tr key={productOrder.name}>
              <td>{productOrder.name}</td>
              <td>{productOrder.quantity}</td>
              <td>{productOrder.price}</td>
              <td>{productOrder.orderPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="border p-5">
        <div>
          Total Price: <b>${totalPrice}</b>
        </div>
        <form action="#" className="grid place-content-center">
          <label htmlFor="name">Name</label>
          <input className="border max-w-md" type="text" name="name" required />
          <label htmlFor="date">Pickup Date</label>
          <input
            className="border max-w-md text-center"
            type="date"
            name="date"
            id="date"
            required
          />
          <button className="bg-blue-500 text-white m-5 p-2 px-4 rounded">
            Order
          </button>
        </form>
      </div>
    </div>
  );
}
