import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Detect Supabase session
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };

    getUser();

    // listen to login/logout events
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getUser();
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-transparent z-50">
      <Link to="/" className="text-xl font-bold text-white">
        IMAGINATE
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/explore" className="text-sm text-cyan-200 hover:underline">
          Explore
        </Link>

        <Link to="/about" className="text-sm text-cyan-200 hover:underline">
          About
        </Link>

        <Link
          to="/imaginate"
          className="text-sm text-white bg-cyan-500/90 px-3 py-1 rounded-md"
        >
          Imaginate
        </Link>

        {!user ? (
          <Link to="/login" className="text-sm text-white/90 hover:underline">
            Log in
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="text-sm text-red-300 hover:underline"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
