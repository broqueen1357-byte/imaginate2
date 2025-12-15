import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #050b18, #000)",
        padding: "20px",
        color: "white",
        overflowY: "auto", // ⭐ SCROLL ENABLED
      }}
    >
      {/* MAIN CARD */}
      <div
        style={{
          width: "95%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px",
          borderRadius: "25px",
          background: "rgba(0,0,0,0.35)",
          border: "1px solid rgba(80,180,255,0.40)",
          boxShadow: "0 0 25px rgba(0,160,255,0.45)",
          textAlign: "center",
          backdropFilter: "blur(4px)",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "45px",
            fontWeight: "700",
            marginBottom: "5px",
            color: "#6ecbff",
            textShadow: "0 0 25px #3db7ff",
          }}
        >
          Explore Imaginate
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: "25px",
            marginBottom: "45px",
            color: "#e0e0e0",
            textShadow: "0 0 10px black",
          }}
        >
          See how simple ideas turn into clear visual concept.
        </p>

        {/* 3-CARD GRID */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
            marginBottom: "70px", // ⭐ SPACE ABOVE FOOTER
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              padding: "18px",
              borderRadius: "18px",
              border: "1px solid rgba(80,180,255,0.35)",
              background: "rgba(0,0,0,0.35)",
              boxShadow: "0 0 18px rgba(0,160,255,0.35)",
              textAlign: "left",
            }}
          >
            <img
              src="/god.png"
              alt="Smartwatch"
              style={{
                width: "100%",
                borderRadius: "12px",
                marginBottom: "12px",
              }}
            />

            <h2 style={{ fontSize: "25px", fontWeight: "700" }}>
              Futuristic Smartwatch
            </h2>

            <p style={{ color: "#ff59d4", marginTop: "6px", fontSize: "20px" }}>
              A minimal AI-powered wearable concept designed for 2030
            </p>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              padding: "18px",
              borderRadius: "18px",
              border: "1px solid rgba(80,180,255,0.35)",
              background: "rgba(0,0,0,0.35)",
              boxShadow: "0 0 18px rgba(0,160,255,0.35)",
              textAlign: "left",
            }}
          >
            <img
              src="/god3.png"
              alt="Cap Umbrella"
              style={{
                width: "100%",
                borderRadius: "12px",
                marginBottom: "12px",
              }}
            />

            <h2 style={{ fontSize: "25px", fontWeight: "700" }}>
              Electronic Cap Umbrella
            </h2>

            <p style={{ color: "#ff59d4", marginTop: "6px", fontSize: "20px" }}>
              A smart cap that deploys instant sun protection with one tap
            </p>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              padding: "18px",
              borderRadius: "18px",
              border: "1px solid rgba(80,180,255,0.35)",
              background: "rgba(0,0,0,0.35)",
              boxShadow: "0 0 18px rgba(0,160,255,0.35)",
              textAlign: "left",
            }}
          >
            <img
              src="/god2.png"
              alt="Smart Table"
              style={{
                width: "100%",
                borderRadius: "12px",
                marginBottom: "12px",
              }}
            />

            <h2 style={{ fontSize: "25px", fontWeight: "700" }}>
              Smart Classroom Table
            </h2>

            <p style={{ color: "#ff59d4", marginTop: "6px", fontSize: "20px" }}>
              An adaptive study desk that supports posture, notes, and focus.
            </p>
          </div>
        </div>

        {/* FOOTER CARD */}
        <div
          style={{
            padding: "25px",
            borderRadius: "18px",
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(80,180,255,0.4)",
            boxShadow: "0 0 18px rgba(0,160,255,0.4)",
            marginTop: "10px", // ⭐ MOVES FOOTER DOWN
            marginBottom: "10px", // ⭐ EXTRA SPACE UNDER FOOTER
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "700",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            Your ideas can shape the future
          </h2>

          <Link to="/imaginate">
            <button
              style={{
                padding: "14px 40px",
                fontSize: "18px",
                fontWeight: "700",
                borderRadius: "15px",
                background: "linear-gradient(90deg, #009dff, #00d5ff)",
                color: "black",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 20px rgba(0,160,255,0.6)",
              }}
            >
              Start With Your Idea
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
