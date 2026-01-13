// src/pages/Explore.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { interpretationConcepts } from "../data/interpretationConcepts";

export default function Explore() {
  const navigate = useNavigate();
  const [activeConcept, setActiveConcept] = useState(null);

  // Flatten all concepts into one array for display
  const allConcepts = Object.values(interpretationConcepts).flat();

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
      {/* HEADER */}
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
          A glimpse of visual ideas Imaginate can generate today
        </p>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {allConcepts.map((concept) => (
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
            <div
              style={{
                width: "100%",
                height: 180,
                background:
                  "linear-gradient(135deg, rgba(78,203,255,0.1), rgba(0,170,255,0.1))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                color: "#9fe8ff",
              }}
            >
              {concept.title}
            </div>

            <div style={{ padding: 16 }}>
              <h3 style={{ margin: "0 0 6px", fontSize: 18 }}>
                {concept.title}
              </h3>
              <span style={{ fontSize: 13, color: "#9fe8ff" }}>
                {concept.description.substring(0, 60)}...
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
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
            <div
              style={{
                width: "100%",
                height: 200,
                background:
                  "linear-gradient(135deg, rgba(78,203,255,0.1), rgba(0,170,255,0.1))",
                borderRadius: 14,
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                color: "#9fe8ff",
              }}
            >
              {activeConcept.title}
            </div>

            <h2 style={{ marginBottom: 8 }}>{activeConcept.title}</h2>
            <p style={{ color: "#cfeff7", fontSize: 14 }}>
              {activeConcept.description}
            </p>

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
                background: "linear-gradient(90deg,#4ecbff,#00aaff)",
              }}
            >
              Create something like this
            </button>
          </div>
        </div>
      )}

      {/* ABOUT SECTION */}
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
          You describe an idea — a product, a gadget, or a vision — and
          Imaginate transforms it into visual interpretations.
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
          This is about <b>exploration</b>, <b>clarity</b>, and unlocking imagination.
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
      </div>
    </div>
  );
}