import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-transparent z-50">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xl font-bold text-white">IMAGINATE</Link>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/explore" className="text-sm text-cyan-200 hover:underline">Explore</Link>
        <Link to="/about" className="text-sm text-cyan-200 hover:underline">About</Link>
        <Link to="/imaginate" className="text-sm text-white bg-cyan-500/90 px-3 py-1 rounded-md">Imaginate</Link>
        <Link to="/login" className="text-sm text-white/90">Log in</Link>
      </div>
    </nav>
  );
}
