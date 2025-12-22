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
  // CHECK SESSION ON LOAD
  // -----------------------------------
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) {
        navigate("/home");
      }
    });
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

    setLoading(false);

    if (error) {
      const msg = error.message.toLowerCase();

      if (
        msg.includes("invalid login credentials") ||
        msg.includes("email not confirmed")
      ) {
        setError(
          "Looks like you are new here 😄. Create an account now to get started ✨"
        );
      } else {
        setError(error.message);
      }

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

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    alert("Account created! Please check your email to confirm.");
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
        }}
      >
        IMAGINATE
      </h1>

      <div
        style={{
          width: "400px",
          padding: "35px",
          borderRadius: "25px",
          background: "rgba(10, 14, 30, 0.85)",
          border: "1px solid rgba(80,180,255,0.55)",
        }}
      >
        <h2 style={{ marginBottom: "25px" }}>
          {isCreating ? "Create Account" : "Login"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        {error && (
          <p style={{ color: "#ffb3b3", marginBottom: 12 }}>{error}</p>
        )}

        <button
          onClick={isCreating ? handleCreateAccount : handleLogin}
          disabled={loading}
          style={buttonStyle(loading)}
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
            marginTop: 10,
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

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "12px",
  background: "rgba(0,0,0,0.35)",
  border: "1px solid rgba(80,150,255,0.4)",
  color: "white",
  outline: "none",
};

const buttonStyle = (loading) => ({
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
});