import { useNavigate } from "react-router-dom";
import { useCart } from "../cart";
import { addOrder } from "../firebase";

export function OrderPage() {
  const { calculateOrders, totalPrice } = useCart();
  const productOrders = calculateOrders();
  const navigate = useNavigate();

  if (productOrders.length === 0)
    return (
      <div className="m-8 text-center flex-grow flex justify-center items-center flex-col">
        <div className="italic">
          You haven't added any item into your shopping cart
        </div>
        <button
          className="rounded bg-blue-800 text-white p-2 m-2"
          onClick={() => navigate("/products")}
        >
          Start Ordering
        </button>
      </div>
    );

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
        <form
          action="#"
          className="grid place-content-center"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = document.querySelector("form") as HTMLFormElement;
            const formData = new FormData(form);
            const name = formData.get("name") as string;
            const date = formData.get("date") as string;
            await addOrder(name, date, productOrders);
            alert("Order completed.");
          }}
        >
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
