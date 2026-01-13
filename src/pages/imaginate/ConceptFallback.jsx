// src/pages/imaginate/ConceptFallback.jsx
import { useNavigate } from "react-router-dom";
import { interpretationModesList } from "../../data/interpretationModes";

export default function ConceptFallback() {
  const navigate = useNavigate();

  const handleChoose = (modeId) => {
    const generation = JSON.parse(sessionStorage.getItem("imaginate_generation") || "{}");

    sessionStorage.setItem(
      "imaginate_generation",
      JSON.stringify({
        ...generation,
        interpretationMode: modeId,
      })
    );

    navigate("/imaginate/loading");
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Let’s clarify your idea</h2>
      <p style={styles.subtitle}>
        Your description can be interpreted in different ways.
        <br />
        Choose how you want us to explore it.
      </p>

      <div style={styles.row}>
        {interpretationModesList.map((mode) => (
          <div key={mode.id} style={styles.card} onClick={() => handleChoose(mode.id)}>
            <div style={styles.cardInner}>
              <div style={styles.cardTitle}>{mode.title}</div>
              <p style={styles.cardDesc}>{mode.description}</p>
              <p style={styles.cardDesc}>{mode.guide}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.note}>
        This helps Imaginate stay aligned with your intention.
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
  title: { fontSize: 34, fontWeight: 800, marginBottom: 12, textAlign: "center", color: "#9fe8ff" },
  subtitle: { fontSize: 18, maxWidth: 520, lineHeight: 1.5, opacity: 0.85, textAlign: "center", marginBottom: 40 },
  row: { display: "flex", gap: 30, flexWrap: "wrap", justifyContent: "center" },
  card: {
    flex: "0 0 280px",
    cursor: "pointer",
    borderRadius: 16,
    border: "1px solid rgba(78,203,255,0.2)",
    background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.25))",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },
  cardInner: { padding: 22 },
  cardTitle: { fontSize: 18, fontWeight: 800, color: "#9fe8ff" },
  cardDesc: { marginTop: 10, fontSize: 15, opacity: 0.8, lineHeight: 1.5 },
  note: { marginTop: 30, fontSize: 15, opacity: 0.7, textAlign: "center" },
};