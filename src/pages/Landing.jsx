// src/pages/Landing.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";

export default function Landing() {
  const navigate = useNavigate();

  // generate anonymous session id once
  useEffect(() => {
    let sid = sessionStorage.getItem("imaginate_sid");
    if (!sid) {
      sid = crypto.randomUUID();
      sessionStorage.setItem("imaginate_sid", sid);
    }
  }, []);

  const handleStartImaginating = async () => {
    const session_id = sessionStorage.getItem("imaginate_sid");

    // fire anonymous event
    try {
      await supabase.from("events").insert([
        {
          event_name: "start_imaginating",
          session_id,
          referrer: document.referrer || "direct",
          user_agent: navigator.userAgent,
        },
      ]);
    } catch (err) {
      console.error("tracking failed", err);
    }

    // go straight to product
    navigate("/imaginate");
  };

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
            { text: "Start Imaginating", action: handleStartImaginating, primary: true },
            { text: "Explore Concepts", href: "/explore", secondary: true },
          ].map((btn, idx) => (
            <button
              key={btn.text}
              className="glow-button bounce-in fade-in"
              onClick={() =>
                btn.action ? btn.action() : (window.location.href = btn.href)
              }
              style={{
                padding: btn.primary ? "14px 28px" : "14px 26px",
                fontSize: btn.primary ? 16 : 15,
                fontWeight: btn.primary ? 700 : 600,
                color: btn.primary
                  ? "#001018"
                  : "#9fe8ff",
                background: btn.primary
                  ? "linear-gradient(90deg,#4ecbff,#00aaff)"
                  : "rgba(78,203,255,0.1)",
                border: btn.primary
                  ? "none"
                  : "1px solid rgba(78,203,255,0.5)",
                borderRadius: 12,
                cursor: "pointer",
                boxShadow: btn.primary
                  ? "0 10px 25px rgba(78,203,255,0.35)"
                  : "0 6px 15px rgba(78,203,255,0.2)",
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
            fontSize: 16,
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
