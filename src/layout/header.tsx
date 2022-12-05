import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="bg-orange-400 flex items-center">
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
        <Link className="text-gray-700 hover:text-white" to={"/order"}>
          Order
        </Link>
        <Link className="text-gray-700 hover:text-white" to={"/contact"}>
          Contact
        </Link>
      </div>
    </div>
  );
}
