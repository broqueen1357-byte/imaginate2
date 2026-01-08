// src/pages/Imaginate.jsx
import { useState } from "react";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { fakeConcepts } from "../data/fakeConcepts";

export default function Imaginate() {
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [imaginationType, setImaginationType] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isNested = location.pathname !== "/imaginate";
  const isMobile = window.innerWidth <= 768;

  // IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  // GENERATE
const handleGenerate = () => {
  if (! imaginationType) { 
    alert("select what you are imagining first");
  }
  const prompt = document.getElementById("ideaInput").value.trim();

  if (!prompt || !image) {
    alert("Prompt and image required");
    return;
  }

  // 🔥 CLEAR OLD STATE
  sessionStorage.removeItem("imaginate_fallback_concepts");
  sessionStorage.removeItem("imaginate_selected_concept");

  const matchedConcept = fakeConcepts.find((c) =>
    prompt.toLowerCase().includes(c.keyword.toLowerCase())
  );

  sessionStorage.setItem(
    "imaginate_generation",
    JSON.stringify({
      prompt,
      uploadedImage: image,
      concept: matchedConcept || null,
      imaginationType,
    })
  );

  if (matchedConcept) {
    navigate("/imaginate/loading");
  } else {
    navigate("/imaginate/concept-fallback");
  }
};

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #050b18, #000)",
        padding: isMobile ? "15px" : "20px",
        color: "white",
        overflowY: "auto",
      }}
    >
      {isNested ? (
        <Outlet />
      ) : (
        <>
          {/* BACK */}
          <Link
            to="/"
            style={{
              position: "absolute",
              top: isMobile ? "15px" : "25px",
              left: isMobile ? "15px" : "25px",
              padding: "8px 18px",
              borderRadius: "12px",
              border: "1px solid rgba(80,180,255,0.45)",
              color: "#5bc6ff",
              background: "rgba(0,0,0,0.35)",
              textDecoration: "none",
              boxShadow: "0 0 15px rgba(0,160,255,0.4)",
              fontSize: isMobile ? "14px" : "16px",
            }}
          >
            ← Back
          </Link>

          {/* TITLE */}
          <h1
            style={{
              fontSize: isMobile ? "32px" : "45px",
              fontWeight: "700",
              textAlign: "center",
              marginTop: isMobile ? "60px" : "40px",
              marginBottom: "40px",
              color: "#6ecbff",
              textShadow: "0 0 25px #3db7ff",
            }}
          >
            IMAGINATE
          </h1>

          {/* CARD */}
          <div
            style={{
              width: "100%",
              maxWidth: "1100px",
              margin: "0 auto",
              padding: isMobile ? "20px" : "40px",
              borderRadius: "25px",
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(80,180,255,0.40)",
              boxShadow: "0 0 25px rgba(0,160,255,0.45)",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "24px" : "35px",
                color: "#d5e9ff",
                marginBottom: "20px",
                fontWeight: "600",
              }}
            >
              Describe your idea or concept
            </h2>
            <p style={{ marginBottom: "10px", color: "#a8b8ff", fontSize: "19px" }}>
              Imaginate explores visual interpretations not final AI outputs.
            </p>


            <input
              id="ideaInput"
              type="text"
              placeholder="Ex: A sustainable smartwatch that glows when moved…"
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "15px",
                border: "1px solid rgba(200,200,255,0.25)",
                background: "rgba(0,0,0,0.35)",
                color: "white",
                marginBottom: "30px",
                outline: "none",
              }}
            />
            <p style={{ marginBottom: "10px", color: "#a8b8ff", fontSize: "25px" }}>
              What are you imagining?
            </p>

            <div style={{ display: "flex", gap: "10px", marginBottom: "25px" }}>
              {["Product", "Concept", "Visual idea"].map((type) => (
            <button
             key={type}
             onClick={() => setImaginationType(type)}
             style={{
             padding: "10px 18px",
             borderRadius: "20px",
             border:
             imaginationType === type
             ? "1px solid #6ecbff"
             : "1px solid rgba(255,255,255,0.25)",
             background:
             imaginationType === type ? "#6ecbff" : "transparent",
             color: imaginationType === type ? "#000" : "#fff",
             cursor: "pointer",
             fontWeight: 600,
            }}
            >
           {type}
          </button>
        ))}
        </div>

            {/* GRID */}
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "25px",
              }}
            >
              {/* UPLOAD */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragActive(true);
                }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
                onClick={() => document.getElementById("fileInput").click()}
                style={{
                  height: isMobile ? "240px" : "350px",
                  borderRadius: "20px",
                  border: `2px dashed ${
                    dragActive ? "#6ddcff" : "rgba(255,255,255,0.25)"
                  }`,
                  background: "rgba(0,0,0,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {image ? (
                  <img
                    src={image}
                    alt="preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "15px",
                    }}
                  />
                ) : (
                  <span style={{ fontSize: isMobile ? "16px" : "20px" }}>
                    Drop image or tap to upload
                  </span>
                )}
              </div>

              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />

              {/* TIPS */}
              <div
                style={{
                  padding: "20px",
                  borderRadius: "18px",
                  background: "rgba(0,0,0,0.25)",
                  border: "1px solid rgba(80,180,255,0.35)",
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? "22px" : "30px",
                    color: "#9dd7ff",
                    marginBottom: "10px",
                  }}
                >
                  Tips for clearer explorations
                </h3>
                <p
                  style={{
                    fontSize: isMobile ? "16px" : "22px",
                    lineHeight: "1.6",
                  }}
                >
                  Be as descriptive as possible.
                  <br />
                  More details → better results.
                </p>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={! imaginationType}
              style={{
                width: "100%",
                marginTop: "35px",
                padding: "15px",
                borderRadius: "15px",
                fontSize: isMobile ? "18px" : "20px",
                fontWeight: "700",
                background: imaginationType ? "#7fffd4" : "#555",
                color: "black",
                border: "none",
                cursor: imaginationType ? "pointer" : "not-allowed",
                opacity: imaginationType ? 1 : 0.6,
              }}
            >
             Explore
            </button>
            <p
             style={{
             marginTop: "8px",
             fontSize: "19px",
             opacity: 0.7,
             textAlign: "center",
             }}
            >
              Best results come from clear, single-idea descriptions.
            </p>

              <h3
                style={{
                  fontSize: isMobile ? "22px" : "30px",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  textShadow: "0 0 5px #00f6ff, 0 0 20px #ff00e0",
                  marginBottom: "10px",
                }}
              >
                Early results are conceptual explorations, not final outputs.
              </h3>
          </div>
        </>
      )}
    </div>
  );
}