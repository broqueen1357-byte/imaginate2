// src/pages/imaginate/ConceptFallback.jsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fakeConcepts } from "../../data/fakeConcepts";

export default function ConceptFallback() {
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Pick 3 random concepts for fallback
    const shuffled = [...fakeConcepts].sort(() => 0.5 - Math.random());
    setOptions(shuffled.slice(0, 3));
  }, []);

  const handleChoose = (concept) => {
    // Save chosen concept to session for loading & 3DResult
    const generation = JSON.parse(
      sessionStorage.getItem("imaginate_generation") || "{}"
    );
    sessionStorage.setItem(
      "imaginate_generation",
      JSON.stringify({
        ...generation,
        concept,
        prompt: concept.title, // use chosen concept title as prompt
      })
    );

    // Navigate to loading page
    navigate("/imaginate/loading");
  };

  return (
    <div style={styles.page}>
      <h2
        style={{
        fontSize: 34,
        fontWeight: 800,
        marginBottom: 12,
        textAlign: "center",
        color: "#9fe8ff",
       }}
      >
       Let’s clarify your idea
      </h2>

      <p
        style={{
        fontSize: 18,
        maxWidth: 520,
        lineHeight: 1.5,
        opacity: 0.85,
        textAlign: "center",
        marginBottom: 40,
       }}
      >
        Your description can go in multiple directions.  
        Pick the closest one so we generate something aligned.
      </p>
      
      <div style={styles.row}>
        {options.map((c) => (
          <div
            key={c.id}
            style={styles.card}
            onClick={() => handleChoose(c)}
          >
            <div style={styles.imgWrap}>
              <img src={c.image} alt={c.title} style={styles.img} />
            </div>
            <div style={styles.label}>{c.title}</div>
          </div>
        ))}
      </div>

      <div style={styles.note}>
        Click a concept to continue or go back to try a new idea.
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    background: "radial-gradient(circle at center, #050b18, #000)",
    color: "white",
    padding: 30,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 40,
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1.4,
    color: "#9fe8ff",
  },
  Subtitle: {
    textAlign: "center",
    marginBottom: 40,
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1.4,
    color: "#9fe8ff",
  },
  row: {
    display: "flex",
    gap: 30,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    flex: "0 0 260px",
    cursor: "pointer",
    borderRadius: 16,
    overflow: "hidden",
    border: "1px solid rgba(78,203,255,0.15)",
    background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.15))",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  imgWrap: {
    width: "100%",
    height: 180,
    overflow: "hidden",
    borderBottom: "1px solid rgba(78,203,255,0.1)",
    boxShadow: "0 6px 20px rgba(78,203,255,0.08)",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease",
  },
  label: {
    padding: "14px 0",
    fontWeight: 700,
    fontSize: 16,
    color: "#bff6ff",
  },
  note: {
    marginTop: 25,
    fontSize: 16,
    opacity: 0.75,
    textAlign: "center",
  },
};

// Hover effects via JS (scale + glow)
document.addEventListener("mouseover", (e) => {
  const card = e.target.closest("[style*='flex: 0 0 260px']");
  if (card) {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 12px 40px rgba(78,203,255,0.35)";
    const img = card.querySelector("img");
    if (img) {
      img.style.transform = "scale(1.08)";
      img.style.filter = "drop-shadow(0 0 12px rgba(78,203,255,0.7))";
    }
  }
});
document.addEventListener("mouseout", (e) => {
  const card = e.target.closest("[style*='flex: 0 0 260px']");
  if (card) {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 6px 20px rgba(78,203,255,0.08)";
    const img = card.querySelector("img");
    if (img) {
      img.style.transform = "scale(1)";
      img.style.filter = "none";
    }
  }
});