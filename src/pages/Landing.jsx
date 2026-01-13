import React from "react";

export default function Landing() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0b1c26 0%, #050b10 60%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        color: "#e6f6ff",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 900, width: "100%", position: "relative" }}>
        {/* Headline */}
        <h1
          className="fade-in"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-0.02em",
          }}
        >
          Turn Ideas Into
          <br />
          Visual Imagination
        </h1>

        {/* Guiding / Clarifier line */}
        <p
          className="fade-in"
          style={{
            fontSize: "clamp(16px, 2.4vw, 20px)",
            opacity: 0.85,
            maxWidth: 720,
            margin: "0 auto 32px",
            lineHeight: 1.6,
            animationDelay: "0.3s",
          }}
        >
          Imaginate doesn’t build final products.
          <br />
          It interprets your idea into visual directions you can explore.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 32,
            flexWrap: "wrap",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          {[
            { text: "Start Imaginating", href: "/imaginate", primary: true },
            { text: "Explore Concepts", href: "/explore", secondary: true },
            { text: "Login", href: "/login", small: true },
          ].map((btn, idx) => (
            <button
              key={btn.text}
              className="glow-button bounce-in fade-in"
              onClick={() => (window.location.href = btn.href)}
              style={{
                padding: btn.small
                  ? "12px 20px"
                  : btn.primary
                  ? "14px 28px"
                  : "14px 26px",
                fontSize: btn.small ? 14 : btn.primary ? 16 : 15,
                fontWeight: btn.primary ? 700 : 600,
                color: btn.primary
                  ? "#001018"
                  : btn.secondary
                  ? "#9fe8ff"
                  : "#bcdff0",
                background: btn.primary
                  ? "linear-gradient(90deg,#4ecbff,#00aaff)"
                  : btn.secondary
                  ? "rgba(78,203,255,0.1)"
                  : "transparent",
                border: btn.primary
                  ? "none"
                  : btn.secondary
                  ? "1px solid rgba(78,203,255,0.5)"
                  : "none",
                borderRadius: 12,
                cursor: "pointer",
                boxShadow: btn.primary
                  ? "0 10px 25px rgba(78,203,255,0.35)"
                  : btn.secondary
                  ? "0 6px 15px rgba(78,203,255,0.2)"
                  : "0 6px 15px rgba(78,203,255,0.15)",
                transition: "all 0.25s ease",
                position: "relative",
                overflow: "hidden",
                animationDelay: `${0.6 + idx * 0.2}s`,
              }}
            >
              {btn.text}
            </button>
          ))}
        </div>

        {/* Subtle trust line */}
        <p
          className="fade-in"
          style={{
            marginTop: 28,
            fontSize: 13,
            opacity: 0.55,
            animationDelay: "1.4s",
          }}
        >
          Built for thinkers, builders, and people who start with imagination.
        </p>
      </div>
    </div>
  );
}