import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <div style={styles.wrapper}>
      {/* Floating bubbles */}
      <div style={styles.bubble1}></div>
      <div style={styles.bubble2}></div>
      <div style={styles.bubble3}></div>

      {/* Main Content */}
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to Imaginate</h1>

        <p style={styles.subtitle}>Explore visual interpretations of your ideas.</p>
        <p style={styles.subtitle}>Imaginate helps you see possible visual directions for a concept not final AI outputs.</p>

        <div style={styles.buttons}>
          <button
            style={styles.primaryBtn}
            onMouseDown={(e) => (e.target.style.transform = "scale(0.97)")}
            onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
            onClick={() => navigate("/imaginate")}
          >
            Start Imaginating
          </button>

          <button
            style={styles.secondaryBtn}
            onClick={() => navigate("/")}
          >
            Back to Landing Page
          </button>

          <button
            style={styles.logoutBtn}
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4b1e9b, #200b3b, #11001f)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: "20px",
  },

  /* Floating bubbles */
  bubble1: {
    position: "absolute",
    top: "-50px",
    left: "-40px",
    width: "220px",
    height: "220px",
    background: "rgba(130, 80, 255, 0.25)",
    borderRadius: "50%",
    filter: "blur(40px)",
  },
  bubble2: {
    position: "absolute",
    right: "-30px",
    bottom: "10%",
    width: "180px",
    height: "180px",
    background: "rgba(255, 120, 200, 0.25)",
    borderRadius: "50%",
    filter: "blur(35px)",
  },
  bubble3: {
    position: "absolute",
    left: "50%",
    bottom: "-40px",
    transform: "translateX(-50%)",
    width: "240px",
    height: "240px",
    background: "rgba(70, 150, 255, 0.25)",
    borderRadius: "50%",
    filter: "blur(45px)",
  },

  content: {
    textAlign: "center",
    color: "white",
    zIndex: 2,
    maxWidth: "520px",
    width: "100%",
  },

  title: {
    fontSize: "clamp(28px, 6vw, 40px)",
    fontWeight: "800",
    marginBottom: "12px",
    color: "#b7d3ff",
    textShadow: "0 0 18px rgba(150,200,255,0.75)",
  },

  subtitle: {
    fontSize: "clamp(16px, 4.5vw, 25px)",
    opacity: 0.85,
    marginBottom: "18px",
  },

  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    marginTop: "10px",
  },

  primaryBtn: {
    padding: "14px",
    fontSize: "clamp(16px, 4.5vw, 20px)",
    fontWeight: "700",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff9770)",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 0 18px rgba(255,150,180,0.5)",
    transition: "0.2s",
    width: "100%",
  },

  secondaryBtn: {
    padding: "14px",
    fontSize: "clamp(16px, 4.5vw, 20px)",
    borderRadius: "12px",
    border: "1px solid rgba(180,150,255,0.4)",
    background: "rgba(30,30,60,0.7)",
    color: "white",
    cursor: "pointer",
    transition: "0.2s",
    width: "100%",
  },

  logoutBtn: {
    padding: "14px",
    fontSize: "clamp(16px, 4.5vw, 20px)",
    borderRadius: "12px",
    border: "none",
    background: "#ff4d4d",
    color: "white",
    cursor: "pointer",
    fontWeight: "700",
    boxShadow: "0 0 15px rgba(255,80,80,0.5)",
    transition: "0.2s",
    width: "100%",
  },
};
