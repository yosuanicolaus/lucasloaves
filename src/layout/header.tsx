import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="bg-orange-400 flex items-center sticky top-0">
      <h1 className="text-2xl p-3">
        <Link to={"/"}>Luca's Loaves</Link>
      </h1>
      <div className="flex gap-4 p-4">
        <Link className="text-gray-700 hover:text-white" to={"/"}>
          Home
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
        <Link className="text-gray-700 hover:text-white" to={"/order"}>
          Order
        </Link>
      </div>
    </div>
  );
}
