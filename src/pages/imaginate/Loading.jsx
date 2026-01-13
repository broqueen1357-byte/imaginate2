// src/pages/imaginate/Loading.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { interpretationModes } from "../../data/interpretationModes";

const modeImages = {
  interactive_object: "/modes/interactive_object.png",
  connected_system: "/modes/connected_system.png",
  emotional_symbolic: "/modes/emotional_symbolic.png",
  visual_atmosphere: "/modes/visual_atmosphere.png",
};

export default function Loading() {
  const navigate = useNavigate();
  const generation = JSON.parse(sessionStorage.getItem("imaginate_generation") || "{}");
  const mode = interpretationModes[generation.interpretationMode];

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/imaginate/3d-result");
    }, 2800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img
          src={modeImages[generation.interpretationMode] || "/modes/default.png"}
          alt={mode?.title}
          style={styles.image}
        />

        <h2 style={styles.title}>{mode?.loadingLine || "Interpreting your idea…"}</h2>

        <p style={styles.prompt}>“{generation.prompt || "Your imagination"}”</p>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#020617", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" },
  card: { textAlign: "center", maxWidth: 420 },
  image: { width: "100%", borderRadius: 16, marginBottom: 24 },
  title: { fontSize: 22, fontWeight: 700, marginBottom: 12 },
  prompt: { opacity: 0.7, fontSize: 16 },
};