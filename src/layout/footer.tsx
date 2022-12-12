import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-orange-600 flex justify-evenly">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl">Luca's Loaves</h1>
        </div>
        <ul className="text-sm py-5">
          <li className="hover:text-white">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:text-white">
            <Link to={"/careers"}>Careers</Link>
          </li>
          <li className="hover:text-white">
            <Link to={"/order"}>Order</Link>
          </li>
          <li className="hover:text-white">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="hover:text-white">
            <Link to={"/privacy"}>Privacy</Link>
          </li>
        </ul>
        <div className="flex justify-center items-center flex-col">
          <b>Follow us:</b>
          <div className="gap-3 flex">
            <a href="#" className="hover:text-white">
              twitter
            </a>
            <a href="#" className="hover:text-white">
              youtube
            </a>
            <a href="#" className="hover:text-white">
              github
            </a>
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
