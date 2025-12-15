import { supabase } from "../supabaseClient";

export async function logoutUser() {
  await supabase.auth.signOut();

  // Remove any local data (optional)
  localStorage.removeItem("customUser");
  localStorage.removeItem("loggedIn");
}
