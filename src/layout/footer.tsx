import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-orange-600 flex justify-evenly">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl">Luca's Loaves</h1>
        </div>
        <ul className="text-sm py-5 text-slate-800">
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/careers"}>Careers</Link>
          </li>
          <li>
            <Link to={"/order"}>Order</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/privacy"}>Privacy</Link>
          </li>
        </ul>
        <div className="flex justify-center items-center flex-col">
          <b>Follow us:</b>
          <div className="gap-3 flex">
            <a href="#">twitter</a>
            <a href="#">youtube</a>
            <a href="#">github</a>
          </div>
        </div>
      </div>

      <div className="bg-orange-900 text-white flex justify-center">
        <a href="https://github.com/yosuanicolaus/lucasloaves">
          &copy; Yosua Nicolaus {year}
        </a>
      </div>
    </>
  );
}
