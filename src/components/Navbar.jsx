import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="mx-auto flex flex-row-reverse space-x-4 space-x-reverse p-7 border-b-2">
      <div className="flex text-2xl font-semibold gap-6">
        <Link to="/">Home</Link>
        <Link to="/owner">Owner</Link>
      </div>
    </div>
  );
}
