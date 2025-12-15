import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);

  // -----------------------------------
  // CHECK SESSION — BUT ONLY AFTER MOUNT
  // -----------------------------------
  useEffect(() => {
    async function checkSession() {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        navigate("/home"); 
      }
    }
    checkSession();
  }, []);

  // -----------------------------------
  // LOGIN
  // -----------------------------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      setError(error.message);
      return;
    }

    navigate("/home");
  };

  // -----------------------------------
  // SIGN UP
  // -----------------------------------
  const handleCreateAccount = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      setError(error.message);
      return;
    }

    setLoading(false);
    alert("Account created! Please verify your email before logging in.");
    setIsCreating(false);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #071021, #000)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: "70px",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "40px",
          color: "#6ecbff",
          textShadow: "0 0 25px #3db7ff",
          letterSpacing: "2px",
        }}
      >
        IMAGINATE
      </h1>

      <div
        style={{
          width: "400px",
          padding: "35px 30px",
          borderRadius: "25px",
          background: "rgba(10, 14, 30, 0.85)",
          border: "1px solid rgba(80,180,255,0.55)",
          boxShadow:
            "0 0 25px rgba(80,180,255,0.4), inset 0 0 20px rgba(20,60,120,0.3)",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
            fontSize: "26px",
            fontWeight: "600",
          }}
        >
          {isCreating ? "Create Account" : "Login"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "15px",
            borderRadius: "12px",
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(80,150,255,0.4)",
            color: "white",
            outline: "none",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "12px",
            borderRadius: "12px",
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(80,150,255,0.4)",
            color: "white",
            outline: "none",
          }}
        />

        {!isCreating && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "25px",
            }}
          >
            <input
              type="checkbox"
              style={{
                width: "18px",
                height: "18px",
                accentColor: "#5cbcff",
                cursor: "pointer",
              }}
            />
            <span style={{ fontSize: "15px", color: "#a8b8ff" }}>
              Remember me
            </span>
          </div>
        )}

        {error && (
          <p style={{ color: "red", marginBottom: "15px", fontWeight: "500" }}>
            {error}
          </p>
        )}

        <button
          onClick={isCreating ? handleCreateAccount : handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #38a9ff, #6bc9ff)",
            color: "black",
            fontSize: "18px",
            fontWeight: "700",
            border: "none",
            cursor: "pointer",
            opacity: loading ? 0.6 : 1,
            boxShadow:
              "0 0 22px rgba(80,170,255,0.55), inset 0 0 15px rgba(255,255,255,0.15)",
            marginBottom: "12px",
          }}
        >
          {loading
            ? "Please wait..."
            : isCreating
            ? "Create Account"
            : "Login"}
        </button>

        <p
          onClick={() => {
            setIsCreating(!isCreating);
            setError("");
            setEmail("");
            setPassword("");
          }}
          style={{
            textAlign: "center",
            color: "#a8b8ff",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          {isCreating
            ? "Already have an account? Login"
            : "Don't have an account? Create one"}
        </p>
      </div>
    </div>
  );
}
