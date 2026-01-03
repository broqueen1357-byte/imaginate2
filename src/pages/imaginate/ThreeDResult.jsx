// src/pages/imaginate/ThreeDResult.jsx

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { fakeConcepts } from "../../data/fakeConcepts";

export default function ThreeDResult() {
  const isMobile = window.innerWidth <= 768;
  const location = useLocation();
  const navigate = useNavigate();

  // 🔑 SINGLE SOURCE OF TRUTH
  const generation = JSON.parse(
    sessionStorage.getItem("imaginate_generation")
  );

  // ================= FINAL selectedConcept LOGIC =================
  const [selectedConcept] = useState(() => {
    // 1️⃣ Explicitly passed (rare, but safe)
    if (location.state?.concept) {
      return location.state.concept;
    }

    // 2️⃣ Selected from fallback OR matched earlier
    if (generation?.concept) {
      return generation.concept;
    }

    // 3️⃣ Absolute safety fallback (never random)
    return fakeConcepts[0];
  });

  const userPrompt =
    generation?.prompt ||
    location.state?.prompt ||
    "Your creative idea";

  const handleModify = () => {
    navigate("/imaginate");
  };

  const goToFinal = () => {
    sessionStorage.setItem(
      "imaginate_selected_concept",
      JSON.stringify(selectedConcept)
    );
    navigate("/imaginate/video-preview");
  };
  
  const handleNextStep =() => {
    goToFinal();
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A1224",
        color: "white",
        padding: isMobile ? "20px" : "40px",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "24px" : "40px",
          maxWidth: "1100px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* LEFT IMAGE */}
        <div
          style={{
            width: isMobile ? "100%" : "500px",
            height: isMobile ? "320px" : "550px",
            borderRadius: "14px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.05)",
            padding: "10px",
          }}
        >
          <img
            src={selectedConcept.image}
            alt="Generated Concept"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: isMobile ? "34px" : "65px",
              fontWeight: "900",
              marginBottom: "10px",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {selectedConcept.title}
          </h1>

          <p
            style={{
              fontSize: isMobile ? "18px" : "23px",
              maxWidth: "500px",
              lineHeight: "1.6",
              opacity: 0.85,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            {selectedConcept.description}
          </p>

          <div style={{ marginTop: "20px" }}>
            <h3 style={{ opacity: 0.8 }}>Prompt Used</h3>
          </div>

          <div>
            <h3 style={{ opacity: 0.8 }}>Key Features</h3>
            <ul style={{ fontSize: "20px", lineHeight: "1.8" }}>
              {selectedConcept.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              gap: "15px",
              flexDirection: isMobile ? "column" : "row",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <button onClick={handleModify} style={btn.secondary}>
              Modify
            </button>

            <button onClick={handleNextStep} style={btn.primary}>
              Next Step →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
/* ================= STYLES ================= */

const btn = {
  primary: {
    background: "#1EC8FF",
    color: "black",
    fontWeight: "600",
    border: "none",
    padding: "10px 22px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  secondary: {
    background: "rgba(255,255,255,0.2)",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(8px)",
    zIndex: 50,
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "420px",
    padding: "30px",
    borderRadius: "22px",
    background: "linear-gradient(145deg, #6b3ce8, #0a6fe6)",
    boxShadow: "0 0 30px rgba(0,0,0,0.4)",
    zIndex: 100,
  },
  close: {
    background: "transparent",
    border: "none",
    fontSize: "24px",
    color: "white",
    cursor: "pointer",
  },
  textarea: {
    width: "100%",
    height: "110px",
    borderRadius: "15px",
    padding: "12px",
    background: "rgba(0,0,0,0.4)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.3)",
    resize: "none",
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "15px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(90deg,#3d6cff,#6f92ff)",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },
  successWrap: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  glow: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(80,120,255,0.4), transparent)",
  },
  check: {
    fontSize: "36px",
    marginTop: "-55px",
  },
  successText: {
    marginTop: "15px",
    opacity: 0.9,
  },
};