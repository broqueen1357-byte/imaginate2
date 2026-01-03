import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ---------- STATIC FAKE CONCEPTS (MVP) ---------- */
const fakeConcepts = [
  {
    id: 1,
    title: "HoloDesign Workspace",
    tag: "AI • Workspace",
    image: "/fake/futuristic/mind to design_01.png",
    description:
      "A futuristic holographic workspace designed for creators and engineers.",
    features: ["Hologram UI", "Gesture Control", "Immersive Design Flow"],
  },
  {
    id: 2,
    title: "NeuroLuxe Smart Sofa",
    tag: "Home • Comfort",
    image: "/fake/futuristic/levita sofa_01.png",
    description:
      "A next-gen sofa that adapts posture and comfort using neural sensors.",
    features: ["Posture AI", "Adaptive Comfort", "Health Monitoring"],
  },
  {
    id: 3,
    title: "Smart Impact Gloves",
    tag: "Wearable • Safety",
    image: "/fake/futuristic/glove 2_01.png",
    description:
      "Protective gloves enhanced with impact detection and force feedback.",
    features: ["Impact Sensors", "Haptic Feedback", "AR Training Support"],
  },
  {
    id: 4,
    title: "AuraVision Helmet",
    tag: "Wearable • AR",
    image: "/fake/futuristic/construction site safety_01.png",
    description:
      "An AR helmet for industrial and creative applications.",
    features: ["AR Overlay", "Eye Tracking", "Voice Commands"],
  },
  {
    id: 5,
    title: "PulseFit Smart Jacket",
    tag: "Fashion • Health",
    image: "/fake/futuristic/smart jacket_01.png",
    description:
      "A smart jacket that tracks vitals and adapts to climate conditions.",
    features: ["Health Sensors", "Thermal Control", "Minimal Design"],
  },
];

export default function Explore() {
  const navigate = useNavigate();
  const [activeConcept, setActiveConcept] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #050b18, #000)",
        color: "#e6f7ff",
        padding: "80px 24px",
        fontFamily:
          "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* ---------- HEADER ---------- */}
      <div style={{ textAlign: "center", marginBottom: 55 }}>
        <h1
          style={{
            fontSize: 42,
            fontWeight: 800,
            background: "linear-gradient(90deg,#4ecbff,#00aaff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 12,
          }}
        >
          Explore Concepts
        </h1>

        <p style={{ color: "#9fe8ff", maxWidth: 600, margin: "0 auto" }}>
          A glimpse of what Imaginate can create today.
        </p>
      </div>

      {/* ---------- GRID ---------- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {fakeConcepts.map((concept) => (
          <div
            key={concept.id}
            onClick={() => setActiveConcept(concept)}
            style={{
              cursor: "pointer",
              borderRadius: 18,
              overflow: "hidden",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(78,203,255,0.15)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(78,203,255,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={concept.image}
              alt={concept.title}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />

            <div style={{ padding: 16 }}>
              <h3 style={{ margin: "0 0 6px", fontSize: 18 }}>
                {concept.title}
              </h3>
              <span style={{ fontSize: 13, color: "#9fe8ff" }}>
                {concept.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- MODAL ---------- */}
      {activeConcept && (
        <div
          onClick={() => setActiveConcept(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#050b18",
              borderRadius: 20,
              maxWidth: 520,
              width: "90%",
              padding: 24,
              border: "1px solid rgba(78,203,255,0.25)",
            }}
          >
            <img
              src={activeConcept.image}
              alt={activeConcept.title}
              style={{
                width: "100%",
                borderRadius: 14,
                marginBottom: 16,
              }}
            />

            <h2 style={{ marginBottom: 8 }}>{activeConcept.title}</h2>
            <p style={{ color: "#cfeff7", fontSize: 14 }}>
              {activeConcept.description}
            </p>

            <ul style={{ marginTop: 12, paddingLeft: 18 }}>
              {activeConcept.features.map((f, i) => (
                <li key={i} style={{ fontSize: 13, color: "#9fe8ff" }}>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate("/imaginate")}
              style={{
                marginTop: 20,
                width: "100%",
                padding: "14px 0",
                fontSize: 16,
                fontWeight: 700,
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                color: "#001018",
                background:
                  "linear-gradient(90deg,#4ecbff,#00aaff)",
              }}
            >
              Create something like this
            </button>
          </div>
        </div>
      )}

      {/* ---------- ABOUT SECTION ---------- */}
      <div
        style={{
          marginTop: 70,
          paddingTop: 30,
          borderTop: "1px solid rgba(78,203,255,0.15)",
          maxWidth: 900,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: 40,
            fontWeight: 800,
            marginBottom: 20,
            background: "linear-gradient(90deg,#4ecbff,#00aaff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Imaginate
        </h2>

        <p
          style={{
            fontSize: 20,
            color: "#cfeff7",
            lineHeight: 1.7,
            maxWidth: 720,
            margin: "0 auto 18px",
          }}
        >
          Imaginate is an experimental AI-powered concept engine.
          You describe an idea — a product, a gadget, a vision — and
          Imaginate transforms it into a visual concept.
        </p>

        <p
          style={{
            fontSize: 18,
            color: "#9fe8ff",
            lineHeight: 1.6,
            maxWidth: 720,
            margin: "0 auto 18px",
          }}
        >
          This is not about perfection.
          It’s about <b>speed</b>, <b>clarity</b>, and unlocking imagination.
        </p>

        <p
          style={{
            fontSize: 16,
            color: "#94cbe8",
            fontStyle: "italic",
            marginBottom: 28,
          }}
        >
          Every concept you see here was imagined first — then visualized.
        </p>

        <p
          style={{
            fontSize: 15,
            color: "#7fbad6",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          Imaginate is in early development.
          Your ideas, feedback, and curiosity directly shape what it becomes next.
        </p>
      </div>
    </div>
  );
}