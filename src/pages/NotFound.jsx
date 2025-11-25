import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-2">404 — Page not found</h1>
      <Link to="/" className="text-cyan-400">Go home</Link>
    </div>
  );
}
