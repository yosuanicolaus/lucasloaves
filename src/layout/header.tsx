import { Link } from "react-router-dom";
import { useCart } from "../cart";

export function Header() {
  const { totalItem } = useCart();
  return (
    <div className="bg-orange-400 flex items-center sticky top-0">
      <h1 className="text-2xl p-3">
        <Link to={"/"}>Luca's Loaves</Link>
      </h1>
      <div className="flex gap-4 p-4">
        <Link className="text-gray-700 hover:text-white" to={"/"}>
          Home
        </Link>
        <Link
          className="text-gray-700 hover:text-white"
          to={"/bread-making-class"}
        >
          Bread Making Class
        </Link>
        <Link className="text-gray-700 hover:text-white" to={"/about"}>
          About Us
        </Link>
        <Link className="text-gray-700 hover:text-white" to={"/careers"}>
          Careers
        </Link>
        <Link className="text-gray-700 hover:text-white" to={"/products"}>
          Products
        </Link>
        <Link className="text-gray-700 hover:text-white" to={"/contact"}>
          Contact
        </Link>
        <Link
          className="bg-gray-800 rounded text-xl text-white px-2"
          to={"/order"}
        >
          🛒 | {totalItem}
        </Link>
      </div>
    </div>
  );
}
