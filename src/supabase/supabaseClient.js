import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bsdnkvayfjdktikqmasp.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZG5rdmF5Zmpka3Rpa3FtYXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NzY2MDUsImV4cCI6MjA4MDI1MjYwNX0.JcaxM9OD8Muy7Irl3v0rcyO9qxr6omio9ZRpkQZNc9I"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
