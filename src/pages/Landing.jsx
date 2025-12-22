import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #050b18, #000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        color: "white",
        boxSizing: "border-box",
      }}
    >
      {/* MAIN CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          padding: "clamp(22px, 5vw, 40px)",
          borderRadius: "25px",
          background: "rgba(0,0,0,0.35)",
          border: "1px solid rgba(80,180,255,0.40)",
          boxShadow: "0 0 25px rgba(0,150,255,0.45)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND IMAGE BLUR */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/space.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px)",
            opacity: 0.9,
            zIndex: 0,
          }}
        />

        {/* CONTENT */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* TITLE */}
          <h1
            style={{
              fontSize: "clamp(42px, 9vw, 75px)",
              fontWeight: "700",
              marginBottom: "8px",
              color: "#6ecbff",
              textShadow: "0 0 10px #3db7ff",
            }}
          >
            IMAGINATE
          </h1>

          {/* SUBTEXT */}
          <p
            style={{
              fontSize: "clamp(20px, 5vw, 35px)",
              marginBottom: "8px",
              textShadow: "0 0 10px #000",
            }}
          >
            Turn Ideas Into Visual Concepts
          </p>

          <p
            style={{
              fontSize: "clamp(16px, 4vw, 25px)",
              marginBottom: "35px",
              lineHeight: "1.5",
              textShadow: "0 0 6px #000",
              opacity: 0.95,
            }}
          >
            Describe your idea — Imaginate transforms it into a clear visual
            concept in seconds.
          </p>
          
          <p
            style={{
              fontSize: "clamp(16px, 4vw, 25px)",
              marginBottom: "35px",
              lineHeight: "1.5",
              textShadow: "0 0 6px #000",
              opacity: 0.95,
            }}
          >
            This is an early version. Your feedback helps shape the future.🤝
          </p>

          {/* CTA */}
          <button
            onClick={() => navigate("/imaginate")}
            style={{
              padding: "14px 42px",
              fontSize: "18px",
              fontWeight: "700",
              borderRadius: "14px",
              background: "linear-gradient(90deg, #009dff, #00d5ff)",
              color: "black",
              border: "none",
              cursor: "pointer",
              marginBottom: "45px",
              boxShadow: "0 0 25px rgba(0,160,255,0.6)",
              width: "min(100%, 260px)",
            }}
          >
            Start Imaginating
          </button>

          {/* BOTTOM LINKS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            {[
              { to: "/about", label: "About" },
              { to: "/explore", label: "Explore" },
              { to: "/login", label: "Log In" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  padding: "10px 26px",
                  borderRadius: "12px",
                  background: "rgba(0,0,0,0.45)",
                  border: "1px solid rgba(80,180,255,0.4)",
                  color: "#6ecbff",
                  fontSize: "16px",
                  textDecoration: "none",
                  boxShadow: "0 0 12px rgba(0,150,255,0.4)",
                  minWidth: "110px",
                  textAlign: "center",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
