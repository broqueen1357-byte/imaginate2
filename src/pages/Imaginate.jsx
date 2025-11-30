import { useState } from "react";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";

export default function Imaginate() {
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isNested = location.pathname !== "/imaginate";

  // -------------------------------
  // IMAGE UPLOAD HANDLERS
  // -------------------------------
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

  // -------------------------------
  // GENERATE BUTTON HANDLER
  // -------------------------------
  const handleGenerate = () => {
    const prompt = document.getElementById("ideaInput").value;

    if (!prompt.trim()) {
      alert("Please describe your idea.");
      return;
    }

    if (!image) {
      alert("Please upload an image before generating.");
      return;
    }

    navigate("/imaginate/loading", {
      state: {
        prompt,
        uploadedImage: image,
      },
    });
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #050b18, #000)",
        padding: "20px",
        color: "white",
        overflowY: "auto",
      }}
    >
      {/* If on nested route → show nested component */}
      {isNested ? (
        <Outlet />
      ) : (
        <>
          {/* BACK BUTTON */}
          <Link
            to="/"
            style={{
              position: "absolute",
              top: "25px",
              left: "25px",
              padding: "10px 22px",
              borderRadius: "12px",
              border: "1px solid rgba(80,180,255,0.45)",
              color: "#5bc6ff",
              background: "rgba(0,0,0,0.35)",
              textDecoration: "none",
              boxShadow: "0 0 15px rgba(0,160,255,0.4)",
            }}
          >
            ← Back
          </Link>

          {/* PAGE TITLE */}
          <h1
            style={{
              fontSize: "45px",
              fontWeight: "700",
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "40px",
              color: "#6ecbff",
              textShadow: "0 0 25px #3db7ff",
            }}
          >
            Imaginate
          </h1>

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
              backdropFilter: "blur(4px)",
            }}
          >
            {/* INPUT HEADING */}
            <h2
              style={{
                fontSize: "35px",
                color: "#d5e9ff",
                marginBottom: "20px",
                fontWeight: "600",
              }}
            >
              Describe your idea or concept
            </h2>

            {/* TEXT INPUT */}
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
                marginBottom: "35px",
                outline: "none",
                boxShadow: "0 0 15px rgba(100,180,255,0.2)",
              }}
            />

            {/* GRID */}
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "25px",
              }}
            >
              {/* IMAGE UPLOAD ZONE */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragActive(true);
                }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
                onClick={() => document.getElementById("fileInput").click()}
                style={{
                  height: "350px",
                  borderRadius: "20px",
                  border: `2px dashed ${
                    dragActive ? "#6ddcff" : "rgba(255,255,255,0.25)"
                  }`,
                  background: "rgba(0,0,0,0.25)",
                  boxShadow: dragActive
                    ? "0 0 20px rgba(0,200,255,0.5)"
                    : "0 0 10px rgba(0,0,0,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "0.25s",
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
                  <span style={{ color: "#cbd5e1", fontSize: "20px" }}>
                    Drop your image here or click to upload
                  </span>
                )}
              </div>

              {/* HIDDEN FILE PICKER */}
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />

              {/* TIPS BOX */}
              <div
                style={{
                  padding: "20px",
                  borderRadius: "18px",
                  background: "rgba(0,0,0,0.25)",
                  border: "1px solid rgba(80,180,255,0.35)",
                  boxShadow: "0 0 18px rgba(0,160,255,0.35)",
                }}
              >
                <h3
                  style={{
                    fontSize: "30px",
                    color: "#9dd7ff",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  Tips from Imaginate AI
                </h3>
                <p style={{ color: "#d5d5d5", lineHeight: "1.6", fontSize: "22px" }}>
                  Be as descriptive as possible.
                  <br />
                  More details → better visual concepts.
                </p>
              </div>
            </div>

            {/* GENERATE BUTTON */}
            <button
              onClick={handleGenerate}
              style={{
                width: "100%",
                marginTop: "40px",
                padding: "15px 0",
                borderRadius: "15px",
                fontSize: "20px",
                fontWeight: "700",
                color: "black",
                border: "1px solid #7fffd4",
                background: "#7fffd4",
                boxShadow: "0 0 25px #7fffd4",
                cursor: "pointer",
              }}
            >
              Generate
            </button>
          </div>
        </>
      )}
    </div>
  );
}
