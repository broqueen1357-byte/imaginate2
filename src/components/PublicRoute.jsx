import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

export default function PublicRoute({ children }) {
  const [checking, setChecking] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
      setChecking(false);
    }
    checkUser();
  }, []);

  if (checking) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-lg font-semibold">
        Checking authentication...
      </div>
    );
  }

  return user ? <Navigate to="/" replace /> : children;
}
