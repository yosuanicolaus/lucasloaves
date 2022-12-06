import { Link } from "react-router-dom";

export function AboutPreview() {
  return (
    <div className="border border-black m-5 text-center p-5">
      <h1 className="text-2xl font-bold mb-3">About Luca's Loaves</h1>
      <ul className="mb-3">
        <li>No Store/Commercial yeast</li>
        <li>Hand kneaded and shaped in-house</li>
        <li>Prepared over 14 - 17 hours</li>
        <li>Organic flour</li>
        <li>Easy to digest</li>
      </ul>
      <Link className="text-blue-900" to={"/about"}>
        More Info
      </Link>
    </div>
  );
}
