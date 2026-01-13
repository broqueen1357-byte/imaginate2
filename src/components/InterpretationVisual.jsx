// src/components/InterpretationVisual.jsx
import React from "react";

// Simple placeholder visuals for each mode
// You can replace these with 3D renders, canvas, or AI-generated previews later
const visuals = {
  interactive_object: "/visuals/interactive_object.png",
  connected_system: "/visuals/connected_system.png",
  emotional_symbolic: "/visuals/emotional_symbolic.png",
  visual_atmosphere: "/visuals/visual_atmosphere.png",
};

export default function InterpretationVisual({ mode }) {
  if (!mode) return null;

  const src = visuals[mode.id] || "/visuals/default.png";

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 16,
        overflow: "hidden",
        background: "rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={src}
        alt={mode.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 16,
        }}
        onError={(e) => {
          e.currentTarget.src = "/visuals/default.png";
        }}
      />
    </div>
  );
}