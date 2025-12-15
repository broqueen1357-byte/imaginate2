import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

export default function AdminRoute({ children }) {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  const ADMIN_EMAIL = "broqueen1357@gmail.com";

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
      <div className="w-full h-screen flex items-center justify-center">
        Checking admin access...
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  if (user.email !== ADMIN_EMAIL) return <Navigate to="/" replace />;

  return children;
}
