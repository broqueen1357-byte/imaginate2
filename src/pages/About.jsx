import { Link } from "react-router-dom";

export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #020617, #000)",
        padding: "60px 20px",
        color: "white",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "700",
            marginBottom: "12px",
          }}
        >
          About Imaginate
        </h1>

        <p
          style={{
            fontSize: "25px",
            color: "#cbd5f5",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Turning imagination into visual clarity.
        </p>
      </div>

      {/* MAIN CARD */}
      <div
        style={{
          maxWidth: "820px",
          margin: "0 auto",
          background: "#f8fafc",
          color: "#020617",
          borderRadius: "28px",
          padding: "40px 30px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
        }}
      >
        <h2
          style={{
            fontSize: "35px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          What is Imaginate?
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.7",
            color: "#334155",
            textAlign: "center",
            maxWidth: "620px",
            margin: "0 auto",
          }}
        >
          Imaginate helps you turn ideas into visual concepts instantly.
          Describe what you’re imagining — a product, outfit, or creative idea —
          and Imaginate generates a visual result to help you think, explore,
          and refine faster. It’s built for creators, students, and innovators
          who want to see their ideas before taking the next step.
        </p>
      </div>

      {/* FEATURES */}
      <div
        style={{
          maxWidth: "900px",
          margin: "60px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "30px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <div>
          <h3 style={{ fontSize: "25px", marginBottom: "8px" }}>
            Idea-first
          </h3>
          <p style={{ fontSize: "19px", color: "#cbd5f5" }}>
            Start with thoughts, not perfect prompts.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "25px", marginBottom: "8px" }}>
            Fast Visualization
          </h3>
          <p style={{ fontSize: "19px", color: "#cbd5f5" }}>
            See your idea instantly and iterate faster.
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: "25px", marginBottom: "8px" }}>
            Built for Everyone
          </h3>
          <p style={{ fontSize: "19px", color: "#cbd5f5" }}>
            No design skills needed. Just imagination.
          </p>
        </div>
      </div>

      {/* STATEMENT */}
      <h2
        style={{
          marginTop: "40px",
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "700",
        }}
      >
        Imaginate is the first step from idea to reality.
      </h2>

      {/* BACK BUTTON */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/">
          <button
            style={{
              padding: "14px 36px",
              borderRadius: "14px",
              border: "none",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              background: "linear-gradient(90deg, #6366f1, #22d3ee)",
              color: "#020617",
            }}
          >
            Back to Imaginate
          </button>
        </Link>
      </div>
    </div>
  );
}
