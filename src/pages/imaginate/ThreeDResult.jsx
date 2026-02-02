// src/pages/imaginate/ThreeDResuult.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { interpretationModes } from "../../data/interpretationModes";
import { interpretationConcepts } from "../../data/interpretationConcepts";

function explainPrompt(prompt) {
if (!prompt) return "";

const text = prompt.toLowerCase();

if (text.includes("wearable") || text.includes("device") || text.includes("product")) {
if (text.includes("emotion") || text.includes("feeling")) {
return "This idea explores a wearable product designed to sense or respond to human emotions, focusing on how emotional feedback can shape interaction, behavior, or form.";
}
return "This idea focuses on a physical product or device, exploring how form, function, and interaction come together to express the core concept.";
}

if (text.includes("city") || text.includes("space") || text.includes("environment")) {
return "This idea imagines a spatial or environmental concept, exploring how surroundings, structure, or atmosphere adapt to people and influence experience.";
}

if (text.includes("system") || text.includes("network") || text.includes("connect")) {
return "This idea focuses on a connected system, where multiple elements interact with each other to create a shared experience or outcome.";
}

if (text.includes("emotion") || text.includes("feeling") || text.includes("mood")) {
return "This idea explores emotional or symbolic meaning, focusing on how feelings can be expressed through visual form, interaction, or atmosphere.";
}

return "This idea explores a conceptual direction based on the user’s imagination, focusing on experience, interaction, and visual interpretation rather than a final design.";
}

export default function ThreeDResult() {
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;
  const [generation, setGeneration] = useState(null);
  const [selectedConcept, setSelectedConcept] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("imaginate_generation");
    if (stored) setGeneration(JSON.parse(stored));
  }, []);

  if (!generation) return <div style={{ padding: 40 }}>No generation found.</div>;

  const mode = interpretationModes[generation.interpretationMode];
  const concepts = interpretationConcepts[generation.interpretationMode] || [];
  const userPrompt = generation?.prompt || "Your idea";
  const promptExplanation = explainPrompt(userPrompt);

  const handleModify = () => navigate("/imaginate");
  const handleExplore = () => {
    if (!selectedConcept) return;
    sessionStorage.setItem(
      "imaginate_selected_concept",
      JSON.stringify({ ...selectedConcept, interpretationMode: generation.interpretationMode, prompt: generation.prompt })
    );
    navigate("/imaginate/video-preview");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0A1224", color: "white", padding: isMobile ? "20px" : "40px", display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? "24px" : "40px", maxWidth: "1100px", width: "100%" }}>
        {/* LEFT IMAGE */}
        <div style={{ width: isMobile ? "100%" : "530px", height: isMobile ? "420px" : "620px", borderRadius: "14px", overflow: "hidden", background: "rgba(255,255,255,0.05)", padding: "10px" }}>
          <img
            src={`/modes/${generation.interpretationMode}.png`}
            alt={mode?.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
            onError={(e) => (e.currentTarget.src = "/modes/default.png")}
          />
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: isMobile ? "34px" : "64px", fontWeight: 900, marginBottom: 10 }}>{mode?.title}</h1>
          <p style={{ fontSize: isMobile ? "18px" : "22px", opacity: 0.85, maxWidth: 520, marginBottom: 24 }}>{mode?.resultLabel}</p>

          <div style={{ background: "rgba(255,255,255,0.05)", fontSize: 18, padding: 16, borderRadius: 12, marginBottom: 28 }}>
            <strong>Your idea</strong>
            <p style={{ marginTop: 8 }}>{userPrompt}</p>
          </div>

        
        {/* IMAGINATE UNDERSTANDING */}
        <div
         style={{
          background: "rgba(120,180,255,0.08)",
          padding: "18px",
          borderRadius: "14px",
          marginBottom: "28px",
          border: "1px solid rgba(120,180,255,0.25)",
        }}
        >
        <strong style={{ color: "#9fe8ff", fontSize: 16 }}>
          How Imaginate understands your idea
        </strong>

        <p
         style={{
          marginTop: 10,
          fontSize: 19,
          lineHeight: 1.6,
          opacity: 0.85,
        }}
        >
        {promptExplanation}
        </p>
        </div>

        <strong style={{ color: "#9fe8ff", fontSize: 19 }}>
          This interpretation helps align your intent before visualization.
        </strong>

          {/* CONCEPTS */}
          {concepts.length > 0 && (
            <>
              <h3 style={{ marginBottom: 14 }}>Choose a direction to explore</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                {concepts.map((c) => {
                  const isSelected = selectedConcept?.id === c.id;
                  return (
                    <div
                      key={c.id}
                      onClick={() => setSelectedConcept(c)}
                      style={{
                        padding: 16,
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.06)",
                        border: isSelected ? "1px solid #7fffd4" : "1px solid rgba(120,180,255,0.25)",
                        cursor: "pointer",
                        transform: isSelected ? "scale(1.02)" : "scale(1)",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <div style={{ fontSize: 16, fontWeight: 800, color: "#9fe8ff", marginBottom: 6 }}>{c.title}</div>
                      <p style={{ fontSize: 14, opacity: 0.8 }}>{c.description}</p>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* ACTIONS */}
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexDirection: isMobile ? "column" : "row" }}>
            <button onClick={handleModify} style={btn.secondary}>
              Modify
            </button>

            <button
              onClick={handleExplore}
              disabled={!selectedConcept}
              style={{ ...btn.primary, opacity: selectedConcept ? 1 : 0.5, cursor: selectedConcept ? "pointer" : "not-allowed" }}
            >
              Explore this direction →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const btn = { primary: { padding: "14px 22px", borderRadius: "14px", fontWeight: 700, fontSize: 16, background: "#7fffd4", color: "#000", border: "none", }, secondary: { padding: "14px 22px", borderRadius: "14px", fontWeight: 700, fontSize: 16, background: "rgba(0,0,0,0.3)", color: "#7fffd4", border: "1px solid #7fffd4", }, };